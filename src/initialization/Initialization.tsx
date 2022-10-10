import React, { FC, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TInitialization } from "./Initialization.type";
import { supabase } from "@configs";

//TODO: add update storage
// AsyncStorage.clear();

// const card2data = res.map((item) => {
//   if (item.card_id !== null && item.card_id.name === "card 2") {
//     return item;
//   }
// });

export const Initialization: FC<TInitialization> = ({ children }) => {
  const [fetchedError, setFetchedError] = useState(null);

  // Fetch Screens data from database
  const fetchScreenData = async () => {
    try {
      const { data: screens, error } = await supabase
        .from("screens")
        .select(`*`);

      if (error) {
        setFetchedError(error);
        throw new Error("Error from supabase", fetchedError);
      }

      return screens;
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

  // Get screens data from database & stores it in AsyncStorage at "@screens_content"
  useEffect(() => {
    fetchScreenData().then((res) =>
      storeData("@screens_content", JSON.stringify(res))
    );
  }, []);

  return <>{children}</>;
};
