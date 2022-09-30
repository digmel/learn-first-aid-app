import React, { FC, useState, useEffect } from "react";
import { ExamScreenView } from "./ExamScreen.view";
import {
  TAnswer,
  TAnswerStatus,
  TExamScreenProps,
  TQuestions,
} from "./ExamScreen.type";
import { Questions } from "./questions";
import { ResultScreen } from "@screens";
import { useStore } from "@store";

export const ExamScreen: FC<TExamScreenProps> = ({ navigation }) => {
  const [_index, _setIndex] = useState(0);
  const [_examData, _setExamData] = useState<TQuestions>(Questions[_index]);
  const [_showDetails, _setShowDetails] = useState(false);

  const [allSelectedAnswers, setAllSelectedAnswers] = useState<
    Array<Array<String>>
  >([]);
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

  const CheckAnswers = (selectedAnswer: TAnswer | String) => {
    let AnswerStatusInList: TAnswerStatus = "Empty";

    _setShowDetails(true);

    if (Questions[_index].answer === selectedAnswer) {
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
    if (allSelectedAnswers.length > 0 && allSelectedAnswers[_index]) {
      allSelectedAnswers[_index].forEach((selected: TAnswer | String) => {
        CheckAnswers(selected);
      });
    }
  };

  const { dispatch } = useStore();

  const CountCorrectAnswers = () => {
    for (let i = 0; i < allSelectedAnswers.length; i++) {
      const firstSelection = allSelectedAnswers[i][0];

      if (firstSelection === Questions[i].answer) {
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

  const _onPressNext = () => {
    ClearAnswers();
    _setIndex(_index + 1);
    _setShowDetails(false);

    if (selectedData.length > 0) {
      setAllSelectedAnswers([...allSelectedAnswers, selectedData]);
    }

    _setTestButtonDisabled(false);
    _setPreviousButtonDisabled(false);
    _setNextButtonDisabled(true);
  };

  const _onPressPrevious = () => {
    ClearAnswers();
    _setIndex(_index - 1);
    _setShowDetails(true);

    _setTestButtonDisabled(true);
    _setNextButtonDisabled(false);
  };

  useEffect(() => {
    _setExamData(Questions[_index]);
    ShowSelectedAnswers();

    if (_index === 0) {
      _setPreviousButtonDisabled(true);
    }

    if (_index === 3) {
      navigation.navigate(ResultScreen);
      CountCorrectAnswers();
      ClearAnswers();
      _setIndex(0);
      setAllSelectedAnswers([]);
    }
  });

  return (
    <ExamScreenView
      index={_index}
      onPressNext={_onPressNext}
      onPressPrevious={_onPressPrevious}
      onPressA={_onPressA}
      onPressB={_onPressB}
      onPressC={_onPressC}
      onPressD={_onPressD}
      AnswerA={_answerA}
      AnswerB={_answerB}
      AnswerC={_answerC}
      AnswerD={_answerD}
      AnswerStatus={_answerStatus}
      showDetails={_showDetails}
      examData={_examData}
      isNextButtonDisabled={_isNextButtonDisabled}
      isPreviousButtonDisabled={_isPreviousButtonDisabled}
      isTestButtonDisabled={_isTestButtonDisabled}
    />
  );
};
