import {
  TResultCounterActions,
  TResultCounterStore,
} from "./ResultCounter.type";

export const resultCounterReducer = (
  store: TResultCounterStore = { correctAnswer: 0 },
  action: TResultCounterActions
) => {
  switch (action.type) {
    case "incrementResult":
      return {
        correctAnswer: store.correctAnswer + 1,
      };
    case "clearResult":
      return {
        correctAnswer: 0,
      };

    default:
      return store;
  }
};

export const resultCounterInitialState = {
  correctAnswer: 0,
};
