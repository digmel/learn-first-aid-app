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
  openExam,
  openCardDetails,
  injuriesData,
  disastersData,
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
            {injuriesData &&
              injuriesData.map((card) => (
                <Card
                  key={card.id}
                  title={card.display_name}
                  svg={card.navigation_name}
                  onPress={() => {
                    openCardDetails(card.navigation_name);
                  }}
                />
              ))}
          </CardSlider>
        </Section>

        <Section topSpace={size.l}>
          <CardSlider title="Learn " subTitle="Natural Disasters">
            {disastersData &&
              disastersData.map((card) => (
                <Card
                  key={card.id}
                  title={card.display_name}
                  svg={card.navigation_name}
                  onPress={() => {
                    openCardDetails(card.navigation_name);
                  }}
                />
              ))}
          </CardSlider>
        </Section>
      </Screen>
    </LinearGradient>
  );
};
