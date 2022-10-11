import React, { FC, useEffect, useState } from "react";
import { TExamIntroScreenProps } from "./ExamIntroScreen.type";
import { ExamIntroScreenView } from "./ExamIntroScreen.view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "@configs";

export const ExamIntroScreen: FC<TExamIntroScreenProps> = ({ navigation }) => {
  const [fetchedError, setFetchedError] = useState(null);

  // Fetch Exam Tests data from database
  const fetchExamTests = async () => {
    try {
      const { data: exam_tests, error } = await supabase
        .from("exam_tests")
        .select(`*`);

      if (error) {
        setFetchedError(error);
        throw new Error("Error from supabase", fetchedError);
      }

      return exam_tests;
    } catch ({ message }) {
      throw new Error("fetchScreenData error", message);
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
    fetchExamTests().then((res) =>
      storeData("@exam_tests", JSON.stringify(res))
    );
  }, []);

  const openHome = () => {
    navigation.navigate("ExamScreen");
  };

  return <ExamIntroScreenView openHome={openHome} />;
};
