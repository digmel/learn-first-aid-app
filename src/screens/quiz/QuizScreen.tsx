import React, { FC, useState, useEffect } from "react";
import { QuizScreenView } from "./QuizScreen.view";
import { TAnswer, TAnswerStatus, TQuizScreenProps } from "./QuizScreen.type";
import { useStore } from "@store";
import { getQuizData } from "@utils";

export const QuizScreen: FC<TQuizScreenProps> = ({ navigation }) => {
  const { dispatch } = useStore();
  const [index, setIndex] = useState(0);
  const [quizData, setQuizData] = useState<any[]>([]);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isVariantDisabled, setIsVariantDisabled] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<Array<String>>([]);
  const [_answerA, _setAnswerA] = useState<TAnswerStatus>("Empty");
  const [_answerB, _setAnswerB] = useState<TAnswerStatus>("Empty");
  const [_answerC, _setAnswerC] = useState<TAnswerStatus>("Empty");
  const [_answerD, _setAnswerD] = useState<TAnswerStatus>("Empty");

  // Check Selected Variants to update UI
  const checkVariant = (selection: TAnswer | String) => {
    setSelectedVariants([...selectedVariants, selection]);

    let status: TAnswerStatus;
    if (selection === quizData[index].correct_answer) {
      status = "Correct";
      setIsNextDisabled(false);
      setIsVariantDisabled(true);
    } else {
      status = "Wrong";
    }

    switch (selection) {
      case "A":
        _setAnswerA(status);
        break;
      case "B":
        _setAnswerB(status);
        break;
      case "C":
        _setAnswerC(status);
        break;
      case "D":
        _setAnswerD(status);
        break;
    }
  };

  const _onPressA = () => {
    checkVariant("A");
  };
  const _onPressB = () => {
    checkVariant("B");
  };
  const _onPressC = () => {
    checkVariant("C");
  };
  const _onPressD = () => {
    checkVariant("D");
  };

  // Go Next
  const onPressNext = () => {
    _setAnswerA("Empty");
    _setAnswerB("Empty");
    _setAnswerC("Empty");
    _setAnswerD("Empty");

    if (selectedVariants[0] === quizData[index].correct_answer) {
      dispatch({ type: "incrementResult" });
    }

    if (index === 2) {
      setIndex(0);
      navigation.navigate("QuizResultScreen");
    } else {
      setIndex(index + 1);
    }

    setSelectedVariants([]);
    setIsNextDisabled(true);
    setIsVariantDisabled(false);
  };

  // Get quiz data from database
  useEffect(() => {
    getQuizData().then((res) => {
      setQuizData(res);
    });
  }, []);

  return (
    <QuizScreenView
      index={index}
      onPressNext={onPressNext}
      onPressA={_onPressA}
      onPressB={_onPressB}
      onPressC={_onPressC}
      onPressD={_onPressD}
      AnswerA={_answerA}
      AnswerB={_answerB}
      AnswerC={_answerC}
      AnswerD={_answerD}
      data={quizData}
      isNextDisabled={isNextDisabled}
      isVariantDisabled={isVariantDisabled}
    />
  );
};
