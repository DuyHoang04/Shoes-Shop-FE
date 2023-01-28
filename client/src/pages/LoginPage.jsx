import LoginContainer from "../container/LoginContainer";
import { useEffect } from "react";

export const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <LoginContainer />;
};
