import React, { FC } from "react";
import { TGetStartedScreenProps } from "./GetStartedScreen.type";
import { GetStartedScreenView } from "./GetStartedScreen.view";

export const GetStartedScreen: FC<TGetStartedScreenProps> = ({
  navigation,
}) => {
  const openHome = () => {
    navigation.navigate("HomeScreen");
  };
  return <GetStartedScreenView openHome={openHome} />;
};
