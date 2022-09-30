import React from 'react';
import {styles} from './Topic06Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {
  EarthquakeSvg01,
  EarthquakeSvg02,
  EarthquakeSvg03,
  EarthquakeSvg04,
} from '@svg';

export const Topic06Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Earthquakes</Text>
        </Header>
      }>
      <Section isCentered title="Always">
        <EarthquakeSvg01 />
      </Section>

      <Section>
        <List>Have your emergency kit ready</List>
        <List>Pick safe places in each room</List>
        <List>Review evacuation plans </List>
      </Section>

      <Section title="Inside The Building" isCentered>
        <EarthquakeSvg02 />
      </Section>

      <Section>
        <Text>
          It's safer to stay inside until an earthquake ends, lay down under the
          table to stay away from falling objects. After that use stairs to exit
          buildings.
        </Text>
      </Section>

      <Section isCentered title="Outside The Building">
        <EarthquakeSvg03 />
      </Section>

      <Section>
        <Text>
          Stay outside and go to an open area away from buildings, power lines,
          trees and streetlights. Lay down and stay on the ground until the
          shaking stops.
        </Text>
      </Section>

      <Section title="Driving during" subtitle="Earthquakes">
        <List>Pull over to a clear area</List>
        <List>Avoid bridges, overpasses, buildings</List>
        <List>Put on your seatbelt and stay in the car</List>
        <List>
          Don’t attempt to get out of a car if there are downed power lines
          across it
        </List>
      </Section>

      <Section isCentered title="After" subtitle="Earthquakes">
        <EarthquakeSvg04 />
      </Section>

      <Section>
        <Text>
          After an earthquake, expect and prepare for potential aftershocks,
          fire, landslides, tsunami. Look carefully if there is spilled gasoline
          or other flammable liquids
        </Text>
      </Section>
    </Screen>
  );
};
