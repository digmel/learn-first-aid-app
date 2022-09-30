import React from 'react';
import {styles} from './Topic10Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {ForestFireSvg01, ForestFireSvg02} from '@svg';

export const Topic10Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Forest Fire</Text>
        </Header>
      }>
      <Section title="Always">
        <Text>
          Clear the area near your house of any dried-out branches, leaves, and
          debris, If you live near a forested area .
        </Text>
      </Section>

      <Section isCentered>
        <ForestFireSvg01 />
      </Section>

      <Section title="During" subtitle="Forest Fire">
        <List>Be prepared to evacuate at any time</List>
        <List>Close windows to reduce smoke </List>
        <List>Move combustible away from a house</List>
      </Section>

      <Section isCentered title="After" subtitle="Forest Fire">
        <ForestFireSvg02 />
      </Section>

      <Section>
        <Text>
          Make sure that food and water may be contaminated. Carefully enter
          burned areas, there may still be hazards, such as hot spots, which can
          flare. Remember, always wear protective gear while checking the
          damage.
        </Text>
      </Section>
    </Screen>
  );
};
