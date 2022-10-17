import React, { FC } from "react";
import { styles } from "./QuizResultScreen.style";
import { TQuizResultScreenViewProps } from "./QuizResultScreen.type";
import CircularProgress from "react-native-circular-progress-indicator";
import { Screen, Button, Section, Text } from "@components";
import { View } from "react-native";
import { size, color } from "@theme";

const maxValue = 3;

export const QuizResultScreenView: FC<TQuizResultScreenViewProps> = ({
  onPressGoHome,
  onPressTryAgain,
  correctAnswersValue,
}) => {
  return (
    <Screen isScrollable={false}>
      <View style={styles.textContainer}>
        <Section topSpace={size.xxl} bottomSpace={size.xl} isCentered>
          <Text variation="H1_bold">Congratulations!</Text>
        </Section>

        <Section isCentered bottomSpace={size.xl}>
          <CircularProgress
            value={correctAnswersValue}
            radius={100}
            duration={2000}
            activeStrokeColor={color.success}
            inActiveStrokeColor={color.error}
            inActiveStrokeOpacity={0.8}
            textColor={color.primary}
            maxValue={maxValue}
            valueSuffix={` / ${maxValue}`}
            fontSize={size.xl}
          />
        </Section>

        <Section isCentered>
          <Text textStyle={{ textAlign: "center" }} variation="body_bold">
            Try again with different questions to learn more!
          </Text>
        </Section>
      </View>

      <View style={styles.buttonContainer}>
        <Section>
          <Button text="Try Again" onPress={onPressTryAgain} />
        </Section>

        <Button text="Back to Home" variation="link" onPress={onPressGoHome} />
      </View>
    </Screen>
  );
};
