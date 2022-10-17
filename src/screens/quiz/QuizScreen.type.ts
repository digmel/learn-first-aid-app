export type TAnswerStatus = "Empty" | "Correct" | "Wrong";

export type TAnswer = "A" | "B" | "C" | "D";

export type TQuestions = {
  question: String;
  A: String;
  B: String;
  C: String;
  D: String;
  answer: String;
  details: String;
};

export type TQuizScreenViewProps = {
  index: number;
  onPressNext: Function;
  onPressPrevious: Function;
  onPressA: Function;
  onPressB: Function;
  onPressC: Function;
  onPressD: Function;
  showDetails: boolean;
  AnswerA: TAnswerStatus;
  AnswerB: TAnswerStatus;
  AnswerC: TAnswerStatus;
  AnswerD: TAnswerStatus;
  AnswerStatus: boolean | undefined;
  examData: any;
  isNextButtonDisabled: boolean;
  isPreviousButtonDisabled: boolean;
  isTestButtonDisabled: boolean;
};

export type TQuizScreenProps = {
  navigation: any;
};
