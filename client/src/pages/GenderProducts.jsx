import React, { useEffect } from "react";
import GenderProductsContainer from "../container/GenderProductsContainer";

export const GenderProducts = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <GenderProductsContainer />
    </div>
  );
};
