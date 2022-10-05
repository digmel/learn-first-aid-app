import React, { FC } from "react";
import { styles } from "./GetStartedScreen.style";
import { TGetStartedViewProps } from "./GetStartedScreen.type";
import { Screen, Button, Section, Text, size } from "@components";
import { GetStartedScreenSvg } from "@svg";

export const GetStartedScreenView: FC<TGetStartedViewProps> = ({
  onPressIntroduction,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section containerStyle={styles.svgContainer} bottomSpace={size.xxl}>
        <GetStartedScreenSvg />
      </Section>

      <Section topSpace={size.xxl} bottomSpace={size.xl}>
        <Text variation="H1_bold">Learn First Aid</Text>

        <Text variation="H2_light">It takes a second to save a life!</Text>
      </Section>

      <Section>
        <Button text="Get Started" onPress={onPressIntroduction} />
      </Section>
    </Screen>
  );
};
