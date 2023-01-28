import React, { useEffect } from "react";
import { Contact } from "../components/Contact";

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <Contact />;
};
