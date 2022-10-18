import React, { FC, useEffect, useState } from "react";
import { TQuizIntroScreenProps } from "./QuizIntroScreen.type";
import { QuizIntroScreenView } from "./QuizIntroScreen.view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "api";

export const QuizIntroScreen: FC<TQuizIntroScreenProps> = ({ navigation }) => {
  const [fetchedError, setFetchedError] = useState(null);

  // Fetch Exam Tests data from database
  const fetchQuizData = async () => {
    try {
      const { data: quiz_data, error } = await supabase
        .from("quiz_data")
        .select(`*`);

      if (error) {
        setFetchedError(error);
        throw new Error("Error from supabase", fetchedError);
      }

      return quiz_data;
    } catch ({ message }) {
      throw new Error("fetchQuizData error", message);
    }
  };

  // Stores data to AsyncStorage
  const storeData = async (storageKey, value) => {
    try {
      await AsyncStorage.setItem(storageKey, value);
    } catch ({ message }) {
      throw new Error("storeData error", message);
    }
  };

  useEffect(() => {
    fetchQuizData().then((res) => storeData("@quiz_data", JSON.stringify(res)));
  }, []);

  const openHome = () => {
    navigation.navigate("QuizScreen");
  };

  return <QuizIntroScreenView openHome={openHome} />;
};
