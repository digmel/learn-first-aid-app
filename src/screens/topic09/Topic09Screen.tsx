import React from 'react';
import {styles} from './Topic09Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {HurricanesSvg01, HurricanesSvg02} from '@svg';

export const Topic09Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Hurricanes</Text>
        </Header>
      }>
      <Section title="Always">
        <List>Have your emergency kit ready</List>
        <List>Secure windows and doors</List>
        <List>Cut dead branches, trees </List>
      </Section>

      <Section title="During" subtitle="Hurricanes" isCentered>
        <HurricanesSvg01 />
      </Section>

      <Section>
        <Text>
          You may need evacuation, be prepared for that. Avoid walking or
          driving through flooded roads and bridges. Remember, after the
          hurricane eye passes, it will return from the opposite direction.
        </Text>
      </Section>

      <Section isCentered title="After" subtitle="Hurricanes">
        <HurricanesSvg02 />
      </Section>

      <Section>
        <Text>
          Be prepared for secondary disasters like flooding, landslides,
          building damage. Make sure that your home is safe, check the walls,
          doors, staircases, and windows for damage. Don’t forget that water may
          have been contaminated.
        </Text>
      </Section>
    </Screen>
  );
};
