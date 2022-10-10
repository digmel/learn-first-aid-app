import React, { FC } from "react";
import { THomeScreenViewProps } from "./HomeScreen.type";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./HomeScreen.style";
import { Section, Screen, Card, CardSlider, Text, Button } from "@components";
import Logo from "@assets/Logo.svg";
import { size, color } from "@theme";

export const HomeScreenView: FC<THomeScreenViewProps> = ({
  openExam,
  openArticles,
  injuriesData,
  disastersData,
}) => {
  return (
    <LinearGradient colors={[color.gradientStart, color.gradientEnd]}>
      <Screen style={styles.container}>
        <Section topSpace={size.xxl} containerStyle={styles.logoContainer}>
          <Logo />
        </Section>

        <Section>
          <Text variation="body_bold" textStyle={styles.bannerText}>
            Check your Knowledge
          </Text>
        </Section>

        <Section topSpace={size.l}>
          <Button text="Start Test" variation="primary" onPress={openExam} />
        </Section>

        <Section topSpace={size.l}>
          <CardSlider title="Learn " subTitle="Injuries">
            {injuriesData &&
              injuriesData.map((article) => (
                <Card
                  key={article.id}
                  title={article.name}
                  svgPath={article.cover_path}
                  onPress={() => {
                    openArticles(article.id);
                  }}
                />
              ))}
          </CardSlider>
        </Section>

        <Section topSpace={size.l}>
          <CardSlider title="Learn " subTitle="Natural Disasters">
            {disastersData &&
              disastersData.map((article) => (
                <Card
                  key={article.id}
                  title={article.name}
                  svgPath={article.cover_path}
                  onPress={() => {
                    openArticles(article.id);
                  }}
                />
              ))}
          </CardSlider>
        </Section>
      </Screen>
    </LinearGradient>
  );
};
