import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  GetStartedScreen,
  DashboardScreen,
  ExamScreen,
  ResultScreen,
  Topic01Screen,
  Topic02Screen,
  Topic03Screen,
  Topic04Screen,
  Topic05Screen,
  Topic06Screen,
  Topic07Screen,
  Topic08Screen,
  Topic09Screen,
  Topic10Screen,
} from "../screens";

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroductionScreen" component={GetStartedScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="ExamScreen" component={ExamScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />

      <Stack.Screen name="Topic01Screen" component={Topic01Screen} />
      <Stack.Screen name="Topic02Screen" component={Topic02Screen} />
      <Stack.Screen name="Topic03Screen" component={Topic03Screen} />
      <Stack.Screen name="Topic04Screen" component={Topic04Screen} />
      <Stack.Screen name="Topic05Screen" component={Topic05Screen} />
      <Stack.Screen name="Topic06Screen" component={Topic06Screen} />
      <Stack.Screen name="Topic07Screen" component={Topic07Screen} />
      <Stack.Screen name="Topic08Screen" component={Topic08Screen} />
      <Stack.Screen name="Topic09Screen" component={Topic09Screen} />
      <Stack.Screen name="Topic10Screen" component={Topic10Screen} />
    </Stack.Navigator>
  );
};
