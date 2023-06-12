"use client";

import { ICustomButton } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: ICustomButton) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
