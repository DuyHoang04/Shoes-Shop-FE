import React from "react";
import DetailContainer from "../container/DetailContainer";
import { useLocation } from "react-router-dom";

export const DetailPage = () => {
  const { state } = useLocation();
  return <DetailContainer id={state} />;
};
