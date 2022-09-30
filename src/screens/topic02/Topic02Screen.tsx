import React from 'react';
import {styles} from './Topic02Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {AsthmaSvg01, AsthmaSvg02} from '@svg';

export const Topic02Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Asthma Attacks</Text>
        </Header>
      }>
      <Section title="What is" subtitle="an asthma attack?" isCentered>
        <AsthmaSvg01 />
        <Text>
          Asthma is a medical condition that affects the airways – tubes that
          carry air in and out of the lungs. If someone has an asthma attack,
          tubes are narrowed, making it difficult to breathe in and out.
        </Text>
      </Section>

      <Section isCentered title="Risks & Symptoms">
        <AsthmaSvg02 />
      </Section>

      <Section title="Signs of" subtitle="EMERGENCY">
        <List>Person finds it very difficult to breathe</List>
        <List>Unable to speak comfortably </List>
        <List>Their lips are turning blue</List>
        <List>Symptoms get worse very quickly</List>
        <List>Little or no relief from their inhaler</List>
      </Section>

      <Section title="What to do" subtitle="to help">
        <Text>
          Help them to sit up and lean forward slightly as this may make it
          easier to breathe. Give the inhaler and encourage them to breathe
          slowly and deeply. If the attack becomes severe, or they don't have
          their inhaler, call for emergency.
        </Text>
      </Section>
    </Screen>
  );
};
