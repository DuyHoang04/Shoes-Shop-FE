import React, { useEffect } from "react";
import HomeContainer from "../container/HomeContainer";

export const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <HomeContainer />
    </>
  );
};
