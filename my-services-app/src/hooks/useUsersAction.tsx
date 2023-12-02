import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserType = {
  name?: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  isAdmin?: boolean;
  status?: string;
};
// let users: UserType[] = [];

const useUsersAction = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [user, setUser] = useState<UserType | null>(null);
  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getCurrentUsers: null | string = localStorage.getItem("users");
    if (getCurrentUsers === null) {
      localStorage.setItem("users", JSON.stringify(users));
      setUsers([]);
    } else {
      setUsers([...JSON.parse(getCurrentUsers)]);
      setLoading(false);
    }
  }, [openNotification]);

  useEffect(() => {
    setLoading(true);
    const getLoginUser: null | string = localStorage.getItem("loginUser");
    if (getLoginUser === null) {
      localStorage.setItem("loginUser", JSON.stringify(user));
    } else {
      setLoading(false);
      setUser(JSON.parse(getLoginUser));
    }
  }, [openNotification]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleActive = (email: string) => {
    const findUser = users.find((usr) => usr.email === email);
    if (findUser) {
      findUser.status = "active";
      const remaining = users.filter((usr) => usr?.email !== email);
      setUsers([...remaining, findUser]);
      localStorage.setItem("users", JSON.stringify([...remaining, findUser]));
      setErrorMessage("");
      setSuccessMessage("User can login now");
      setOpenNotification(true);
    }
  };
  const handleInActive = (email: string) => {
    const findUser = users.find((usr) => usr.email === email);

    if (findUser) {
      findUser.status = "inactive";
      const remainingUsers = users.filter((usr) => usr?.email !== email);
      setUsers([...remainingUsers, findUser]);
      localStorage.setItem(
        "users",
        JSON.stringify([...remainingUsers, findUser])
      );
      setSuccessMessage("");
      setErrorMessage("User can't login now");
      setOpenNotification(true);
    }
  };

  const handleSignup = (event: any) => {
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

  const handleLogin = (event: any) => {
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
        localStorage.setItem("loginUser", JSON.stringify({ ...findUser }));
        setErrorMessage("");
        setSuccessMessage("Successfully logged in Alhamdulillah");
        setOpenNotification(true);
        navigate("/dashboard");
      }
    }
  };

  const logout = () => {
    if (user !== null) {
      const findUser = users.find((usr) => usr?.email === user?.email);
      if (findUser) {
        findUser.isLoggedIn = false;
        localStorage.setItem("users", JSON.stringify([...users]));
        localStorage.setItem("loginUser", JSON.stringify(null));
        setUser(null);
        setErrorMessage("");
        setSuccessMessage("Successfully logout.");
        setOpenNotification(true);
        navigate("/login");
      }
    }
  };

  return {
    openNotification,
    user,
    users,
    errorMessage,
    successMessage,
    showPassword,
    setUser,
    setErrorMessage,
    setSuccessMessage,
    setShowPassword,
    setOpenNotification,
    handleShowPassword,
    handleSignup,
    handleLogin,
    logout,
    loading,
    setLoading,
    handleInActive,
    handleActive,
  };
};

export default useUsersAction;
