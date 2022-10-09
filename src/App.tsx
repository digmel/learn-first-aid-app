import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "@router";
import { StoreProvider } from "@store";
import { Initialization } from "./initialization";

const App = () => {
  return (
    <StoreProvider>
      <Initialization>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Initialization>
    </StoreProvider>
  );
};

export default App;
