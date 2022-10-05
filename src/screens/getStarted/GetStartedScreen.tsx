import React, { FC } from "react";
import { TGetStartedScreenProps } from "./GetStartedScreen.type";
import { GetStartedScreenView } from "./GetStartedScreen.view";
import { DashboardScreen } from "@screens";

export const GetStartedScreen: FC<TGetStartedScreenProps> = ({
  navigation,
}) => {
  const _onPressIntroduction = () => {
    navigation.navigate(DashboardScreen);
  };
  return <GetStartedScreenView onPressIntroduction={_onPressIntroduction} />;
};
