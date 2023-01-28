import React, { useEffect } from "react";
import DetailContainer from "../container/DetailContainer";
import { useLocation } from "react-router-dom";

export const DetailPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { state } = useLocation();
  return <DetailContainer id={state} />;
};
