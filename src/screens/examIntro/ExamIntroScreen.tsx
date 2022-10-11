import React, { FC } from "react";
import { TExamIntroScreenProps } from "./ExamIntroScreen.type";
import { ExamIntroScreenView } from "./ExamIntroScreen.view";

export const ExamIntroScreen: FC<TExamIntroScreenProps> = ({ navigation }) => {
  const openHome = () => {
    navigation.navigate("ExamScreen");
  };
  return <ExamIntroScreenView openHome={openHome} />;
};
