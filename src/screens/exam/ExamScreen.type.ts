export type TAnswerStatus = 'Empty' | 'Correct' | 'Wrong';

export type TAnswer = 'A' | 'B' | 'C' | 'D';

export type TQuestions = {
  question: String;
  A: String;
  B: String;
  C: String;
  D: String;
  answer: String;
  details: String;
};

export type TExamScreenViewProps = {
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
  examData: TQuestions;
  isNextButtonDisabled: boolean;
  isPreviousButtonDisabled: boolean;
  isTestButtonDisabled: boolean;
};

export type TExamScreenProps = {
  navigation: any;
};
