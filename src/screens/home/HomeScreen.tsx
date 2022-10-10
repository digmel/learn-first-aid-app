import React, { FC, useEffect, useState } from "react";
import { HomeScreenView } from "./HomeScreen.view";
import { THomeScreenProps } from "./HomeScreen.type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen: FC<THomeScreenProps> = ({ navigation }) => {
  const [injuriesData, setInjuriesData] = useState([]);
  const [disastersData, setDisastersData] = useState([]);

  const getArticles = async () => {
    try {
      const dataJSON = await AsyncStorage.getItem("@articles_metadata");
      const data = JSON.parse(dataJSON);

      const injuries = data.filter((article) => article.topic === "injuries");
      const disasters = data.filter(
        (article) => article.topic === "natural_disaster"
      );

      setDisastersData(disasters);
      setInjuriesData(injuries);
    } catch ({ message }) {
      throw new Error("getCardScreensData error at HomeScreen", message);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const openExam = () => {
    navigation.navigate("ExamScreen");
  };

  const openArticles = (id: string) => {
    navigation.navigate("ArticlesScreen", { id });
  };

  return (
    <HomeScreenView
      openExam={openExam}
      openArticles={openArticles}
      injuriesData={injuriesData}
      disastersData={disastersData}
    />
  );
};
