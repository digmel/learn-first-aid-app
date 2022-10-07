import React, { FC } from "react";
import { TIconProps } from "./Icon.type";
import { SvgProps } from "react-native-svg";
import Menu from "../../assets/icons/Menu.svg";
import first from "../../assets/icons/first.svg";

export const Icon: FC<TIconProps> = ({ name, width = 40, height = 40 }) => {
  let DynamicIcon: FC<SvgProps>;

  switch (name) {
    case "Menu":
      DynamicIcon = Menu;
      break;
    case "first":
      DynamicIcon = first;
      break;
  }
  return <DynamicIcon width={width} height={height} />;
};
