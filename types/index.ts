import { MouseEventHandler } from "react";

export interface ICustomButton {
  title: string;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ISearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ICarFilters {
  manufacturer?: string;
  model?: string;
  fuel?: string;
  year?: number;
  limit?: number;
}

export interface IHomeParams {
  searchParams: ICarFilters;
}

export interface IOptionsProps {
  title: string;
  value: string;
}

export interface ICustomFilter {
  title: string;
  options: IOptionsProps[];
}

export interface IShowMore {
  pageNumber: number;
  isNext: boolean;
}
