import React, { useEffect, useState } from "react";
import { styles } from "./CardDetailsScreen.style";
import { Screen, Text, Section, List, Svg } from "@components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSvgURL } from "@utils";
import { View } from "react-native";

export const CardDetailsScreen = ({ route }) => {
  const [content, setContent] = useState<Record<string, Array<string>>>();
  const [svgURL, setSvgURL] = useState<string[]>();
  const { navigation_name } = route.params;

  const getScreenData = async () => {
    // get content
    try {
      const screensJSON = await AsyncStorage.getItem("@screens_content");
      const screens = JSON.parse(screensJSON);

      const content = screens.find(
        (screen) => screen.navigation_name === navigation_name
      );
      setContent(content);
    } catch ({ message }) {
      throw new Error("getScreenData error at CardDetailsScreen", message);
    }

    // get SVG paths
    try {
      const sections = Object.keys(content);
      const paths = [];

      sections.forEach(async (section_name) => {
        if (
          content[section_name] !== null &&
          section_name !== "id" &&
          section_name !== "topic" &&
          section_name !== "navigation_name" &&
          section_name !== "display_name" &&
          section_name !== "created_at"
        ) {
          await getSvgURL(
            `screens/${content.navigation_name}`,
            section_name
          ).then((url) => paths.push({ section_name, url }));
        }

        setSvgURL(paths);
      });
    } catch ({ message }) {
      console.log("error getting pass", message);
    }
  };

  const getPath = (b) => {
    console.log("paths", svgURL);

    if (b === "description_section") {
      const a =
        "https://inkxowqgjumngskanmry.supabase.co/storage/v1/object/public/illustrations/screens/anaphylaxis/description_section.svg";
      return a;
    } else {
      return "";
    }
  };

  useEffect(() => {
    getScreenData();
  }, []);

  return (
    <Screen isHeaderSticky style={styles.container}>
      {content?.description_section && (
        <Section title="What is" subtitle={`${content.display_name}?`}>
          <View style={{ height: 300 }}>
            <Svg uri={getPath("description_section")} />
          </View>

          <Text>{content.description_section}</Text>
        </Section>
      )}

      {content?.symptoms_section && (
        <Section title="Symptoms">
          {content.symptoms_section.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section>
      )}

      {content?.recognition_section && (
        <Section title="How to" subtitle="Recognize">
          {content.recognition_section.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section>
      )}

      {content?.help_section && (
        <Section isCentered title="How to" subtitle="help">
          <Text>{content.help_section}</Text>
        </Section>
      )}

      {content?.always_section && (
        <Section title="Always">
          {content.always_section.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section>
      )}

      {content?.inside_section && (
        <Section isCentered title="Inside" subtitle="The Building">
          <Text>{content.inside_section}</Text>
        </Section>
      )}

      {content?.outside_section && (
        <Section isCentered title="Outside" subtitle="The Building">
          <Text>{content.outside_section}</Text>
        </Section>
      )}

      {content?.during_section && (
        <Section title="During" subtitle={`the ${content.display_name}`}>
          {content.during_section.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section>
      )}

      {content?.driving_section && (
        <Section title="Driving" subtitle={`during ${content.display_name}`}>
          {content.driving_section.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section>
      )}

      {content?.after_section && (
        <Section
          isCentered
          title="After"
          subtitle={`the ${content.display_name}`}
        >
          <Text>{content.after_section}</Text>
        </Section>
      )}
    </Screen>
  );
};
