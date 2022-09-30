import React, { FC } from "react";
import { styles } from "./IntroductionScreen.style";
import { TIntroductionScreenViewProps } from "./IntroductionScreen.type";
import { Screen, Button, Section, Text, size } from "../../components";
import { IntroductionScreenSvg } from "../../svg";

export const IntroductionScreenView: FC<TIntroductionScreenViewProps> = ({
  onPressIntroduction,
}) => {
  return (
    <Screen isScrollViewDisabled>
      <Section containerStyle={styles.svgContainer} bottomSpace={size.xxl}>
        <IntroductionScreenSvg />
      </Section>

      <Section topSpace={size.xxl} bottomSpace={size.xl}>
        <Text variation="H1_bold">Learn First Aid</Text>

        <Text variation="H2_light">It takes a second to save a life!</Text>
      </Section>

      <Section>
        <Button text="Start" onPress={onPressIntroduction} />
      </Section>
    </Screen>
  );
};
