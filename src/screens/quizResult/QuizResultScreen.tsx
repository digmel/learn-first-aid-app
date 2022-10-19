import { useStore } from "@store";
import React, { FC } from "react";
import { TQuizResultScreenProps } from "./QuizResultScreen.type";
import { QuizResultScreenView } from "./QuizResultScreen.view";

export const QuizResultScreen: FC<TQuizResultScreenProps> = ({
  navigation,
}) => {
  const { store, dispatch } = useStore();

  const _onPressGoHome = () => {
    dispatch({ type: "clearResult" });
    navigation.navigate("HomeScreen");
  };

  const _onPressTryAgain = () => {
    dispatch({ type: "clearResult" });
    navigation.navigate("QuizScreen");
  };
  return (
    <QuizResultScreenView
      onPressGoHome={_onPressGoHome}
      onPressTryAgain={_onPressTryAgain}
      correctAnswersValue={store.resultCounter.correctAnswer}
    />
  );
};
