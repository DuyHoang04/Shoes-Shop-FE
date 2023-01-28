import React from "react";
import SearchContainer from "../container/SearchContainer";
import { useLocation } from "react-router-dom";

export const SearchPage = () => {
  const {
    state: { textName },
  } = useLocation();

  return <SearchContainer textName={textName} />;
};
