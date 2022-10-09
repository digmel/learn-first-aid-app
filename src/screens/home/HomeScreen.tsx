import React, { FC, useEffect, useState } from "react";
import { HomeScreenView } from "./HomeScreen.view";
import { THomeScreenProps } from "./HomeScreen.type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen: FC<THomeScreenProps> = ({ navigation }) => {
  const [injuriesData, setInjuriesData] = useState([]);
  const [disastersData, setDisastersData] = useState([]);

  const getCardScreensData = async () => {
    try {
      const screensJSON = await AsyncStorage.getItem("@screens_content");
      const screens = JSON.parse(screensJSON);

      const injuries = screens.filter((screen) => screen.topic === "injuries");
      const disasters = screens.filter(
        (screen) => screen.topic === "natural_disaster"
      );

      setDisastersData(disasters);
      setInjuriesData(injuries);
    } catch ({ message }) {
      throw new Error("getCardScreensData error at HomeScreen", message);
    }
  };

  useEffect(() => {
    getCardScreensData();
  }, []);

  const openExam = () => {
    navigation.navigate("ExamScreen");
  };

  const openCardDetails = (navigation_name: string) => {
    navigation.navigate("CardDetailsScreen", { navigation_name });
  };

  return (
    <HomeScreenView
      openExam={openExam}
      openCardDetails={openCardDetails}
      injuriesData={injuriesData}
      disastersData={disastersData}
    />
  );
};
