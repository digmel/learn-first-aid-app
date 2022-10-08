import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  GetStartedScreen,
  HomeScreen,
  ExamScreen,
  ResultScreen,
  CardDetailsScreen,
} from "../screens";

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
      <Stack.Screen name="ExamScreen" component={ExamScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />

      <Stack.Screen name="CardDetailsScreen" component={CardDetailsScreen} />
    </Stack.Navigator>
  );
};
