import React, { FC, useEffect, useState } from "react";
import { TInitialization } from "./Initialization.type";

export const Initialization: FC<TInitialization> = ({ children }) => {
  const a = "hehe";
  console.log("aaa", a);
  return <>{children}</>;
};
