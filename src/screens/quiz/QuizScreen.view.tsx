import React, { FC } from "react";
import { TQuizScreenViewProps } from "./QuizScreen.type";
import { styles } from "./QuizScreen.style";
import { Section, Screen, Text, List, Button, ProgressBar } from "@components";
import { View } from "react-native";

export const QuizScreenView: FC<TQuizScreenViewProps> = ({
  index,
  onPressNext,
  onPressA,
  onPressB,
  onPressC,
  onPressD,
  AnswerA,
  AnswerB,
  AnswerC,
  AnswerD,
  data,
  isNextDisabled,
  isVariantDisabled,
}) => {
  return (
    <Screen isScrollable={false}>
      <View style={styles.container}>
        <Section>
          <Text variation="body_bold">{data[index]?.question}</Text>
        </Section>

        <Section>
          <List
            variation={AnswerA}
            onPress={onPressA}
            isDisabled={isVariantDisabled}
          >
            {data[index]?.variant_A}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerB}
            onPress={onPressB}
            isDisabled={isVariantDisabled}
          >
            {data[index]?.variant_B}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerC}
            onPress={onPressC}
            isDisabled={isVariantDisabled}
          >
            {data[index]?.variant_C}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerD}
            onPress={onPressD}
            isDisabled={isVariantDisabled}
          >
            {data[index]?.variant_D}
          </List>
        </Section>
      </View>

      <Section isCentered>
        <ProgressBar progressIndex={index} />
      </Section>

      <Button text="Next" onPress={onPressNext} isDisabled={isNextDisabled} />
    </Screen>
  );
};
