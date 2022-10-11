import React, { FC } from "react";
import { styles } from "./GetStartedScreen.style";
import { TGetStartedViewProps } from "./GetStartedScreen.type";
import { Screen, Button, Section, Text } from "@components";
import GetStartedSVG from "@assets/GetStarted.svg";
import { size } from "@theme";
import { View } from "react-native";

export const GetStartedScreenView: FC<TGetStartedViewProps> = ({
  openHome,
}) => {
  return (
    <Screen isScrollable={false}>
      <View style={styles.container}>
        <GetStartedSVG />
      </View>
      <Section bottomSpace={size.xl}>
        <Text variation="H1_bold">Learn First Aid</Text>

        <Text variation="H2_light">It takes a second to save a life!</Text>
      </Section>

      <Button text="Get Started" onPress={openHome} />
    </Screen>
  );
};
