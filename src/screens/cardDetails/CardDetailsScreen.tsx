import React, { useEffect, useState } from "react";
import { styles } from "./CardDetailsScreen.style";
import { Screen, Text, Section, List } from "@components";
import { supabase } from "@configs";

export const CardDetailsScreen = ({ route }) => {
  const [content, setContent] = useState<Record<string, Array<string>>>();
  const [fetchedError, setFetchedError] = useState(null);
  const { cardID } = route.params;

  const fetchScreenData = async () => {
    try {
      const { data: screens, error } = await supabase.from("screens").select();
      const content = screens.find((screen) => screen.id === cardID);
      setContent(content);

      if (error) {
        setFetchedError(error);
        throw new Error("Error from supabase", fetchedError);
      }
    } catch ({ message }) {
      throw new Error("Fetch data error at HomeScreen", message);
    }
  };

  useEffect(() => {
    fetchScreenData();
  }, []);

  return (
    <Screen isHeaderSticky style={styles.container}>
      {content && (
        <Section title="What is" subtitle={`${content.name}?`}>
          <Text>{content.description}</Text>
        </Section>
      )}

      {content?.symptoms && (
        <Section title="Symptoms">
          {content.symptoms.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section>
      )}

      {content?.emergency && (
        <Section title="Signs of" subtitle="EMERGENCY">
          {content.emergency.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section>
      )}

      {content?.recognition && (
        <Section title="How to" subtitle="Recognize">
          {content.recognition.map((list, index) => (
            <List key={index}>{list}</List>
          ))}
        </Section>
      )}

      {content?.guidance && (
        <Section isCentered title="WHat to do" subtitle="to help">
          <Text>{content.guidance}</Text>
        </Section>
      )}
    </Screen>
  );
};
