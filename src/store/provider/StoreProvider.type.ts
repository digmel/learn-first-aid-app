import { ReactNode } from "react";
import { TResultCounterStore, TResultCounterActions } from "@store";

export type TStoreProvider = {
  children: ReactNode;
};

export type TMainState = {
  resultCounter: TResultCounterStore;
};

export type TMainDispatch = TResultCounterActions;
