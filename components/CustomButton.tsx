"use client";

import { ICustomButton } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  btnType = "button",
  containerStyles,
  handleClick,
}: ICustomButton) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
