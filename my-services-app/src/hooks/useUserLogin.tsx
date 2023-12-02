import { useEffect, useState } from "react";

type UserType = {
  name?: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  isAdmin?: boolean;
  status?: string;
};
// let users: UserType[] = [];

const useUserLogin = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentUsers: any = localStorage.getItem("users");
    if (getCurrentUsers === null) {
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      setUsers(JSON.parse(getCurrentUsers));
    }
  }, []);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let loginData: UserType = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (!users.find((usr) => usr?.email === loginData?.email)) {
      setSuccessMessage("");
      setErrorMessage(
        "There  is no account exist for this email || Please create a new account"
      );
      setOpenNotification(true);
      return;
    }

    const findUser = users.find(
      (user) =>
        user?.email === loginData?.email &&
        user?.password === loginData?.password
    );

    if (!findUser) {
      setSuccessMessage("");
      setErrorMessage("Please enter valid email and password");
      setOpenNotification(true);
    } else {
      if (findUser?.status === "inactive") {
        setSuccessMessage("");
        setErrorMessage(
          "You have no access to login || Please contact with Admin"
        );
        setOpenNotification(true);
      } else {
        findUser.isLoggedIn = true;
        localStorage.setItem("users", JSON.stringify([...users]));
        setErrorMessage("");
        setSuccessMessage("Successfully Logged In || welcome to our website");
        setOpenNotification(true);
      }
    }
  };
  return {
    openNotification,
    errorMessage,
    successMessage,
    showPassword,
    setErrorMessage,
    setSuccessMessage,
    setShowPassword,
    setOpenNotification,
    handleShowPassword,
    handleSubmit,
  };
};

export default useUserLogin;
