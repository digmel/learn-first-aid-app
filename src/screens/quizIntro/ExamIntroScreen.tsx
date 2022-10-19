import React, { FC } from "react";
import { TQuizIntroScreenProps } from "./QuizIntroScreen.type";
import { QuizIntroScreenView } from "./QuizIntroScreen.view";

export const QuizIntroScreen: FC<TQuizIntroScreenProps> = ({ navigation }) => {
  const openHome = () => {
    navigation.navigate("QuizScreen");
  };

  return <QuizIntroScreenView openHome={openHome} />;
};
