import { useEffect, useState } from "react";

type UserType = {
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
  isAdmin: boolean;
  status: string;
};
// let users: UserType[] = [];

const useUserRegistration = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentUsers: null | string = localStorage.getItem("users");
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
    let newUser: UserType = {
      name: "",
      email: "",
      password: "",
      isLoggedIn: false,
      isAdmin: false,
      status: "",
    };
    if (users.length === 0) {
      newUser = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
        isLoggedIn: false,
        isAdmin: true,
        status: "active",
      };
    } else {
      newUser = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
        isLoggedIn: false,
        isAdmin: false,
        status: "inactive",
      };
    }

    if (newUser?.password.length < 4) {
      alert("Password have at least 4 character");
    }

    if (users.length > 0) {
      const findUser: UserType | undefined = users.find(
        (user) => user?.email === newUser?.email
      );
      if (findUser) {
        setSuccessMessage("");
        setErrorMessage(
          "This email already have an account || Please try again"
        );
        setOpenNotification(true);
        return;
      }
    }

    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setErrorMessage("");
    setSuccessMessage("User created successfully || You can login now");
    setOpenNotification(true);
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.password.value = "";
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

export default useUserRegistration;
