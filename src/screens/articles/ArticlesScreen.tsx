import React, { useEffect, useState } from "react";
import { styles } from "./ArticlesScreen.style";
import { Screen, Text, Section, List, Svg } from "@components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

export const ArticlesScreen = ({ route }) => {
  const [content, setContent] = useState([]);
  const [articleName, setArticleName] = useState<string>();
  const { id } = route.params;

  const getContent = async () => {
    try {
      const dataJSON = await AsyncStorage.getItem("@articles_content");
      const data = JSON.parse(dataJSON);

      const articleData = data.filter((content) => {
        if (content.article.id === id) {
          setArticleName(content.article.name);
          return content;
        }
      });

      articleData.sort((a, b) => a.order - b.order);

      setContent(articleData);
    } catch ({ message }) {
      throw new Error("getScreenData error at CardDetailsScreen", message);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <Screen hasHeader hasBack title={articleName} style={styles.container}>
      {content.map((section, index) => (
        <Section key={index} title={section.title} subtitle={section.subtitle}>
          {section.svg_path && (
            <View style={{ height: 250 }}>
              <Svg uri={section.svg_path} />
            </View>
          )}

          {section.body_text && <Text>{section.body_text}</Text>}

          {section.body_list &&
            section.body_list.map((list, index) => (
              <List key={index}>{list}</List>
            ))}
        </Section>
      ))}
    </Screen>
  );
};
