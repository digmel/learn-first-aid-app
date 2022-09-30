import React, { FC } from "react";
import { TIntroductionScreenProps } from "./IntroductionScreen.type";
import { IntroductionScreenView } from "./IntroductionScreen.view";
import { DashboardScreen } from "../../screens";

export const IntroductionScreen: FC<TIntroductionScreenProps> = ({
  navigation,
}) => {
  const _onPressIntroduction = () => {
    navigation.navigate(DashboardScreen);
  };
  return <IntroductionScreenView onPressIntroduction={_onPressIntroduction} />;
};
