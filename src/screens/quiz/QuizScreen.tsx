import React, { FC, useState, useEffect } from "react";
import { QuizScreenView } from "./QuizScreen.view";
import { TAnswer, TAnswerStatus, TQuizScreenProps } from "./QuizScreen.type";
import { useStore } from "@store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const QuizScreen: FC<TQuizScreenProps> = ({ navigation }) => {
  const { dispatch } = useStore();
  const [index, setIndex] = useState(0);
  const [quizData, setQuizData] = useState<any[]>([]);
  const [showDetails, setShowDetails] = useState(false);

  const [allSelectedAnswers, setAllSelectedAnswers] = useState([]);
  const [selectedData, setSelectedData] = useState<Array<String>>([]);

  const [_isNextButtonDisabled, _setNextButtonDisabled] = useState(true);
  const [_isPreviousButtonDisabled, _setPreviousButtonDisabled] =
    useState(true);
  const [_isTestButtonDisabled, _setTestButtonDisabled] = useState(false);

  const [_answerStatus, _setAnswerStatus] = useState<boolean>();

  const [_answerA, _setAnswerA] = useState<TAnswerStatus>("Empty");
  const [_answerB, _setAnswerB] = useState<TAnswerStatus>("Empty");
  const [_answerC, _setAnswerC] = useState<TAnswerStatus>("Empty");
  const [_answerD, _setAnswerD] = useState<TAnswerStatus>("Empty");

  // Get Quiz data from AsyncStorage
  const getQuizData = async () => {
    try {
      const dataJSON = await AsyncStorage.getItem("@quiz_data");
      const data = JSON.parse(dataJSON);
      setQuizData(data);
    } catch ({ message }) {
      throw new Error("getQuizData error", message);
    }
  };

  const CheckAnswers = (selectedAnswer: TAnswer | String) => {
    let AnswerStatusInList: TAnswerStatus = "Empty";

    setShowDetails(true);

    if (quizData[index].correct_answer === selectedAnswer) {
      AnswerStatusInList = "Correct";
      _setAnswerStatus(true);
      _setTestButtonDisabled(true);
      _setNextButtonDisabled(false);
    } else {
      AnswerStatusInList = "Wrong";
      _setAnswerStatus(false);
      _setTestButtonDisabled(false);
      _setNextButtonDisabled(true);
    }

    switch (selectedAnswer) {
      case "A":
        _setAnswerA(AnswerStatusInList);
        break;
      case "B":
        _setAnswerB(AnswerStatusInList);
        break;
      case "C":
        _setAnswerC(AnswerStatusInList);
        break;
      case "D":
        _setAnswerD(AnswerStatusInList);
        break;
    }
  };

  const ClearAnswers = () => {
    _setAnswerA("Empty");
    _setAnswerB("Empty");
    _setAnswerC("Empty");
    _setAnswerD("Empty");
    setSelectedData([]);
  };

  const SaveSelectedAnswers = (selectedAnswer: TAnswer) => {
    setSelectedData([...selectedData, selectedAnswer]);
  };

  const ShowSelectedAnswers = () => {
    if (allSelectedAnswers.length > 0 && allSelectedAnswers[index]) {
      allSelectedAnswers[index].forEach((selected: TAnswer | String) => {
        CheckAnswers(selected);
      });
    }
  };

  const CountCorrectAnswers = () => {
    for (let i = 0; i < allSelectedAnswers.length; i++) {
      const firstSelection = allSelectedAnswers[i][0];

      if (firstSelection === quizData[i].correct_answer) {
        dispatch({ type: "incrementResult" });
      }
    }
  };

  const _onPressA = () => {
    SaveSelectedAnswers("A");
    CheckAnswers("A");
  };
  const _onPressB = () => {
    SaveSelectedAnswers("B");
    CheckAnswers("B");
  };
  const _onPressC = () => {
    SaveSelectedAnswers("C");
    CheckAnswers("C");
  };
  const _onPressD = () => {
    SaveSelectedAnswers("D");
    CheckAnswers("D");
  };

  // Go Next
  const onPressNext = () => {
    setIndex(index + 1);
    ClearAnswers();
    setShowDetails(false);

    if (selectedData.length > 0) {
      setAllSelectedAnswers([...allSelectedAnswers, selectedData]);
    }

    _setPreviousButtonDisabled(false);
    _setTestButtonDisabled(false);
    _setNextButtonDisabled(true);
  };

  // Go back
  const onPressPrevious = () => {
    setIndex(index - 1);
    ClearAnswers();
    setShowDetails(true);

    _setTestButtonDisabled(true);
    _setNextButtonDisabled(false);
  };

  useEffect(() => {
    ShowSelectedAnswers();

    if (index === 0) {
      _setPreviousButtonDisabled(true);
    }

    if (index === 3) {
      navigation.navigate("QuizResultScreen");
      CountCorrectAnswers();
      ClearAnswers();
      setIndex(0);
      setAllSelectedAnswers([]);
    }
  }, [index]);

  useEffect(() => {
    getQuizData();
  }, []);

  return (
    <QuizScreenView
      index={index}
      onPressNext={onPressNext}
      onPressPrevious={onPressPrevious}
      onPressA={_onPressA}
      onPressB={_onPressB}
      onPressC={_onPressC}
      onPressD={_onPressD}
      AnswerA={_answerA}
      AnswerB={_answerB}
      AnswerC={_answerC}
      AnswerD={_answerD}
      AnswerStatus={_answerStatus}
      showDetails={showDetails}
      data={quizData}
      isNextButtonDisabled={_isNextButtonDisabled}
      isPreviousButtonDisabled={_isPreviousButtonDisabled}
      isTestButtonDisabled={_isTestButtonDisabled}
    />
  );
};
