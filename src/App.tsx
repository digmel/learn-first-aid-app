import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "@router";
import { StoreProvider } from "@store";

const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
