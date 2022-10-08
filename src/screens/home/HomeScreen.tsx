import React, { FC, useEffect, useState } from "react";
import { HomeScreenView } from "./HomeScreen.view";
import { THomeScreenProps } from "./HomeScreen.type";
import { supabase } from "@configs";

export const HomeScreen: FC<THomeScreenProps> = ({ navigation }) => {
  const [fetchedError, setFetchedError] = useState(null);
  const [injuriesData, setInjuriesData] = useState([]);
  const [disastersData, setDisastersData] = useState([]);

  const fetchCardData = async () => {
    try {
      const { data: cards, error } = await supabase.from("cards").select();

      const injuries = cards.filter((card) => card.section === "injuries");
      const disasters = cards.filter(
        (card) => card.section === "natural-disaster"
      );

      setDisastersData(disasters);
      setInjuriesData(injuries);

      if (error) {
        setFetchedError(error);
        throw new Error("Error from supabase", fetchedError);
      }
    } catch ({ message }) {
      throw new Error("Fetch data error at HomeScreen", message);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  const openExam = () => {
    navigation.navigate("ExamScreen");
  };

  const openCardDetails = (cardID: number) => {
    navigation.navigate("CardDetailsScreen", { cardID });
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
