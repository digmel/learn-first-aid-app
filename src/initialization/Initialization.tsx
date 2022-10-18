import React, { FC, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TInitialization } from "./Initialization.type";
import { supabase } from "../api";

export const Initialization: FC<TInitialization> = ({ children }) => {
  const [fetchedError, setFetchedError] = useState(null);

  // Fetch Screens data from database
  const fetchArticlesMeta = async () => {
    try {
      const { data: articles_metadata, error } = await supabase
        .from("articles_metadata")
        .select(`*`);

      if (error) {
        setFetchedError(error);
        throw new Error("Error from supabase", fetchedError);
      }

      return articles_metadata;
    } catch ({ message }) {
      throw new Error("fetchScreenData error", message);
    }
  };

  // Fetch Article sections data from database
  const fetchArticlesContent = async () => {
    try {
      const { data: articles_content, error } = await supabase
        .from("articles_content")
        .select(`*, article(id, name)`);

      if (error) {
        setFetchedError(error);
        throw new Error("Error from supabase", fetchedError);
      }

      return articles_content;
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

  // Get Articles meta data from database & stores it in AsyncStorage at "@articles_metadata"
  useEffect(() => {
    fetchArticlesMeta().then((res) =>
      storeData("@articles_metadata", JSON.stringify(res))
    );
  }, []);

  // Get Articles content from database & stores it in AsyncStorage at "@articles_content"
  useEffect(() => {
    fetchArticlesContent().then((res) =>
      storeData("@articles_content", JSON.stringify(res))
    );
  }, []);

  return <>{children}</>;
};
