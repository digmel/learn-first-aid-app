import React, { createContext, Dispatch, useContext, useReducer } from "react";
import {
  resultCounterInitialState,
  resultCounterReducer,
  TMainState,
  TMainDispatch,
  TStoreProvider,
} from "@store";

const StoreContext = createContext<any>([{}, () => {}]);

const mainReducer = (state: TMainState, action: TMainDispatch) => ({
  resultCounter: resultCounterReducer(state.resultCounter, action),
});

const mainInitialState = {
  resultCounter: resultCounterInitialState,
};

export const StoreProvider = ({ children }: TStoreProvider) => (
  <StoreContext.Provider value={useReducer(mainReducer, mainInitialState)}>
    {children}
  </StoreContext.Provider>
);

//Creating useStore custom hook:
export const useStore = () => {
  const [store, dispatch] =
    useContext<[TMainState, Dispatch<TMainDispatch>]>(StoreContext);

  return { store, dispatch };
};
