import React, { FC } from "react";
import { styles } from "./ExamIntroScreen.style";
import { TExamIntroViewProps } from "./ExamIntroScreen.type";
import { Screen, Button, Section, Text } from "@components";
import ExamIntroSVG from "@assets/ExamIntro.svg";
import { size } from "@theme";
import { View } from "react-native";

export const ExamIntroScreenView: FC<TExamIntroViewProps> = ({ openHome }) => {
  return (
    <Screen isScrollable={false}>
      <View style={styles.container}>
        <ExamIntroSVG />
      </View>
      <Section bottomSpace={size.xl}>
        <Text variation="H1_bold">Check your knowledge</Text>

        <Text variation="H2_light">Test contains 10 random questions</Text>
      </Section>

      <Button text="Start" onPress={openHome} />
    </Screen>
  );
};
