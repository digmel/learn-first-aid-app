import React, { FC } from "react";
import { ExamScreen, CardDetailsScreen } from "@screens";
import { HomeScreenView } from "./HomeScreen.view";
import { THomeScreenProps } from "./HomeScreen.type";

export const HomeScreen: FC<THomeScreenProps> = ({ navigation }) => {
  const openExam = () => {
    navigation.navigate(ExamScreen);
  };
  const openCardDetails = () => {
    navigation.navigate(CardDetailsScreen);
  };

  return (
    <HomeScreenView openExam={openExam} openCardDetails={openCardDetails} />
  );
};
