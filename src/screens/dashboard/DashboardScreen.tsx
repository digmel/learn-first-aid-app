import React, { FC } from "react";
import {
  ExamScreen,
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
} from "../../screens";
import { DashboardScreenView } from "./DashboardScreen.view";
import { TDashboardScreenProps } from "./DashboardScreen.type";

export const DashboardScreen: FC<TDashboardScreenProps> = ({ navigation }) => {
  const _goToExam = () => {
    navigation.navigate(ExamScreen);
  };
  const _goToTopic01 = () => {
    navigation.navigate(Topic01Screen);
  };
  const _goToTopic02 = () => {
    navigation.navigate(Topic02Screen);
  };
  const _goToTopic03 = () => {
    navigation.navigate(Topic03Screen);
  };
  const _goToTopic04 = () => {
    navigation.navigate(Topic04Screen);
  };
  const _goToTopic05 = () => {
    navigation.navigate(Topic05Screen);
  };
  const _goToTopic06 = () => {
    navigation.navigate(Topic06Screen);
  };
  const _goToTopic07 = () => {
    navigation.navigate(Topic07Screen);
  };
  const _goToTopic08 = () => {
    navigation.navigate(Topic08Screen);
  };
  const _goToTopic09 = () => {
    navigation.navigate(Topic09Screen);
  };
  const _goToTopic10 = () => {
    navigation.navigate(Topic10Screen);
  };

  return (
    <DashboardScreenView
      goToExam={_goToExam}
      goToTopic01={_goToTopic01}
      goToTopic02={_goToTopic02}
      goToTopic03={_goToTopic03}
      goToTopic04={_goToTopic04}
      goToTopic05={_goToTopic05}
      goToTopic06={_goToTopic06}
      goToTopic07={_goToTopic07}
      goToTopic08={_goToTopic08}
      goToTopic09={_goToTopic09}
      goToTopic10={_goToTopic10}
    />
  );
};
