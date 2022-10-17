import React, { FC } from "react";
import { TQuizScreenViewProps } from "./QuizScreen.type";
import { styles } from "./QuizScreen.style";
import { Section, Screen, Text, List, Button, ProgressBar } from "@components";
import { View } from "react-native";
import { size, color } from "@theme";

export const QuizScreenView: FC<TQuizScreenViewProps> = ({
  index,
  onPressNext,
  onPressPrevious,
  onPressA,
  onPressB,
  onPressC,
  onPressD,
  AnswerA,
  AnswerB,
  AnswerC,
  AnswerD,
  AnswerStatus,
  showDetails,
  data,
  isPreviousButtonDisabled,
  isNextButtonDisabled,
  isTestButtonDisabled,
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
            isDisabled={isTestButtonDisabled}
          >
            {data[index]?.variant_A}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerB}
            onPress={onPressB}
            isDisabled={isTestButtonDisabled}
          >
            {data[index]?.variant_B}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerC}
            onPress={onPressC}
            isDisabled={isTestButtonDisabled}
          >
            {data[index]?.variant_C}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerD}
            onPress={onPressD}
            isDisabled={isTestButtonDisabled}
          >
            {data[index]?.variant_D}
          </List>
        </Section>

        <Section
          isFullWidth
          contentStyle={styles.detailsSection}
          topSpace={size.m}
        >
          {showDetails && (
            <View style={styles.detailsView}>
              <View style={styles.headline}>
                <Text
                  variation="body_bold"
                  color={AnswerStatus ? color.success : color.error}
                >
                  {AnswerStatus ? "Correct" : "Wrong"}
                </Text>
              </View>

              <View style={styles.details}>
                <Text variation="subtitle">{data[index]?.details}</Text>
              </View>
            </View>
          )}
        </Section>
      </View>

      <Section isCentered>
        <ProgressBar progressIndex={index} />
      </Section>

      <View style={styles.buttonContainer}>
        <Button
          text="Previous"
          variation="secondary"
          onPress={onPressPrevious}
          isDisabled={isPreviousButtonDisabled}
        />
        <Button
          text="Next"
          onPress={onPressNext}
          isDisabled={isNextButtonDisabled}
        />
      </View>
    </Screen>
  );
};
