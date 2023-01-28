import RegisterContainer from "../container/RegisterContainer";
import { useEffect } from "react";

export const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <RegisterContainer />;
};
