import React, { FC } from "react";
import { TSvgProps } from "./Svg.type";
import { SvgUri } from "react-native-svg";

export const Svg: FC<TSvgProps> = ({ uri }) => {
  return <SvgUri width="100%" height="100%" uri={uri} />;
};
