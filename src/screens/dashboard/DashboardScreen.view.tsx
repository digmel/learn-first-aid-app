import React, {FC} from 'react';
import {TDashboardScreenViewProps} from './DashboardScreen.type';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './DashboardScreen.style';
import {
  Section,
  Screen,
  Header,
  Card,
  CardSlider,
  size,
  Text,
  Button,
  color,
} from '@components';
import {View} from 'react-native';
import {
  Logo,
  AnaphylaxisSvg,
  AsthmaSvg,
  HeartAttackSvg,
  DiabetesSvg,
  FracturesSvg,
  EarthquakeSvg,
  ThunderstormSvg,
  FloodSvg,
  HurricanesSvg,
  ForestFireSvg,
} from '@svg';

export const DashboardScreenView: FC<TDashboardScreenViewProps> = ({
  goToExam,
  goToTopic01,
  goToTopic02,
  goToTopic03,
  goToTopic04,
  goToTopic05,
  goToTopic06,
  goToTopic07,
  goToTopic08,
  goToTopic09,
  goToTopic10,
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
          <Button text="Start Test" variation="secondary" onPress={goToExam} />
        </Section>

        <Section topSpace={size.l}>
          <CardSlider title="Learn " subTitle="Injuries">
            <Card
              onPress={goToTopic01}
              title="Anaphylaxis"
              svg={<AnaphylaxisSvg />}
            />
            <Card
              onPress={goToTopic02}
              title="Asthma Attacks"
              svg={<AsthmaSvg />}
            />
            <Card
              onPress={goToTopic03}
              title="Heart Attack"
              svg={<HeartAttackSvg />}
            />
            <Card
              onPress={goToTopic04}
              title="Diabetes"
              svg={<DiabetesSvg />}
            />
            <Card
              onPress={goToTopic05}
              title="Fractures"
              svg={<FracturesSvg />}
            />
          </CardSlider>
        </Section>

        <Section bottomSpace={size.xxl}>
          <CardSlider title="Learn " subTitle="Natural Disaster">
            <Card
              onPress={goToTopic06}
              title="Earthquakes"
              svg={<EarthquakeSvg />}
            />
            <Card
              onPress={goToTopic07}
              title="Thunderstorm"
              svg={<ThunderstormSvg />}
            />
            <Card onPress={goToTopic08} title="Flood" svg={<FloodSvg />} />

            <Card
              onPress={goToTopic09}
              title="Hurricanes"
              svg={<HurricanesSvg />}
            />
            <Card
              onPress={goToTopic10}
              title="Forest Fire"
              svg={<ForestFireSvg />}
            />
          </CardSlider>
        </Section>
        <View style={{height: 70}}></View>
      </Screen>
    </LinearGradient>
  );
};
