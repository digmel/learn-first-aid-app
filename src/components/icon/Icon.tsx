import React, { FC } from "react";
import { TIconProps } from "./Icon.type";
import { SvgProps } from "react-native-svg";
import BulletSolid from "@assets/icons/BulletSolid.svg";
import CheckedBoxOutline from "@assets/icons/CheckedBoxOutline.svg";
import CheckedBoxSolid from "@assets/icons/CheckedBoxSolid.svg";
import CheckedOutline from "@assets/icons/CheckedOutline.svg";
import CheckmarkOutlineClear from "@assets/icons/CheckmarkOutlineClear.svg";
import CheckmarkSolidChecked from "@assets/icons/CheckmarkSolidChecked.svg";
import ChevronOutline from "@assets/icons/ChevronOutline.svg";
import CommentOutline from "@assets/icons/CommentOutline.svg";
import CommentSolid from "@assets/icons/CommentSolid.svg";
import CovidSolid from "@assets/icons/CovidSolid.svg";
import CrossOutline from "@assets/icons/CrossOutline.svg";
import CrossOutlineSmall from "@assets/icons/CrossOutlineSmall.svg";
import EnvelopeOutline from "@assets/icons/EnvelopeOutline.svg";
import EnvelopeSolid from "@assets/icons/EnvelopeSolid.svg";
import FacebookOutline from "@assets/icons/FacebookOutline.svg";
import FacebookSolid from "@assets/icons/FacebookSolid.svg";
import GoogleOutline from "@assets/icons/GoogleOutline.svg";
import GoogleSolid from "@assets/icons/GoogleSolid.svg";
import LogoutOutline from "@assets/icons/LogoutOutline.svg";
import LogoutSolid from "@assets/icons/LogoutSolid.svg";
import MenuOutline from "@assets/icons/MenuOutline.svg";
import RedCrossSolid from "@assets/icons/RedCrossSolid.svg";
import StarSolid from "@assets/icons/StarSolid.svg";
import StarSolidHalf from "@assets/icons/StarSolidHalf.svg";
import StarOutline from "@assets/icons/StarOutline.svg";
import StarOutlineHalf from "@assets/icons/StarOutlineHalf.svg";

export const Icon: FC<TIconProps> = ({ name, width = 40, height = 40 }) => {
  let DynamicIcon: FC<SvgProps>;

  switch (name) {
    case "BulletSolid":
      DynamicIcon = BulletSolid;
      break;
    case "CheckedBoxOutline":
      DynamicIcon = CheckedBoxOutline;
      break;
    case "CheckedBoxSolid":
      DynamicIcon = CheckedBoxSolid;
      break;
    case "CheckedOutline":
      DynamicIcon = CheckedOutline;
      break;
    case "CheckmarkOutlineClear":
      DynamicIcon = CheckmarkOutlineClear;
      break;
    case "CheckmarkSolidChecked":
      DynamicIcon = CheckmarkSolidChecked;
      break;
    case "ChevronOutline":
      DynamicIcon = ChevronOutline;
      break;
    case "CommentOutline":
      DynamicIcon = CommentOutline;
      break;
    case "CommentSolid":
      DynamicIcon = CommentSolid;
      break;
    case "CovidSolid":
      DynamicIcon = CovidSolid;
      break;
    case "CrossOutline":
      DynamicIcon = CrossOutline;
      break;
    case "CrossOutlineSmall":
      DynamicIcon = CrossOutlineSmall;
      break;
    case "EnvelopeOutline":
      DynamicIcon = EnvelopeOutline;
      break;
    case "EnvelopeSolid":
      DynamicIcon = EnvelopeSolid;
      break;
    case "FacebookOutline":
      DynamicIcon = FacebookOutline;
      break;
    case "FacebookSolid":
      DynamicIcon = FacebookSolid;
      break;
    case "GoogleOutline":
      DynamicIcon = GoogleOutline;
      break;
    case "GoogleSolid":
      DynamicIcon = GoogleSolid;
      break;
    case "LogoutOutline":
      DynamicIcon = LogoutOutline;
      break;
    case "LogoutSolid":
      DynamicIcon = LogoutSolid;
      break;
    case "MenuOutline":
      DynamicIcon = MenuOutline;
      break;
    case "RedCrossSolid":
      DynamicIcon = RedCrossSolid;
      break;
    case "StarOutline":
      DynamicIcon = StarOutline;
      break;
    case "StarOutlineHalf":
      DynamicIcon = StarOutlineHalf;
      break;
    case "StarSolid":
      DynamicIcon = StarSolid;
      break;
    case "StarSolidHalf":
      DynamicIcon = StarSolidHalf;
      break;
  }
  return <DynamicIcon width={width} height={height} />;
};
