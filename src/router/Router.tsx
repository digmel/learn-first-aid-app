import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  GetStartedScreen,
  HomeScreen,
  QuizScreen,
  QuizIntroScreen,
  QuizResultScreen,
  ArticlesScreen,
} from "@screens";

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="QuizIntroScreen" component={QuizIntroScreen} />
      <Stack.Screen name="QuizResultScreen" component={QuizResultScreen} />
      <Stack.Screen name="ArticlesScreen" component={ArticlesScreen} />
    </Stack.Navigator>
  );
};
