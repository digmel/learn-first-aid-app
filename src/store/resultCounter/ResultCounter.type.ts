export type TResultCounterStore = {
  correctAnswer: number;
};

export type TResultCounterActions = {
  type: "incrementResult" | "clearResult";
};
