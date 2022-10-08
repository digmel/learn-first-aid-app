import React, { FC } from "react";
import { THomeScreenViewProps } from "./HomeScreen.type";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./HomeScreen.style";
import {
  Section,
  Screen,
  Card,
  CardSlider,
  size,
  Text,
  Button,
  color,
} from "@components";
import Logo from "@assets/Logo.svg";

export const HomeScreenView: FC<THomeScreenViewProps> = ({
  openCardDetails,
  openExam,
}) => {
  return (
    <LinearGradient colors={[color.gradientStart, color.gradientEnd]}>
      <Screen style={styles.container}>
        <Section topSpace={size.l} containerStyle={styles.logoContainer}>
          <Logo />
        </Section>

        <Section>
          <Text variation="body_bold" textStyle={styles.bannerText}>
            Check your Knowledge
          </Text>
        </Section>

        <Section topSpace={size.l}>
          <Button text="Start Test" variation="secondary" onPress={openExam} />
        </Section>

        <Section topSpace={size.l}>
          <CardSlider title="Learn " subTitle="Injuries">
            <Card
              onPress={openCardDetails}
              title="Anaphylaxis"
              // svg={<AnaphylaxisSvg />}
            />
            <Card
              onPress={openCardDetails}
              title="Asthma Attacks"
              // svg={<AsthmaSvg />}
            />
            <Card
              onPress={openCardDetails}
              title="Heart Attack"
              // svg={<HeartAttackSvg />}
            />
            <Card
              onPress={openCardDetails}
              title="Diabetes"
              // svg={<DiabetesSvg />}
            />
            <Card
              onPress={openCardDetails}
              title="Fractures"
              // svg={<FracturesSvg />}
            />
          </CardSlider>
        </Section>
      </Screen>
    </LinearGradient>
  );
};
