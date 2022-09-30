import React from 'react';
import {styles} from './Topic07Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {ThunderstormSvg01, ThunderstormSvg02} from '@svg';

export const Topic07Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Thunderstorm</Text>
        </Header>
      }>
      <Section title="Always">
        <List>Have your emergency kit ready</List>
        <List>Keep trees and shrubs trimmed</List>
        <List>Be aware, power outages can occur</List>
      </Section>

      <Section title="Inside The Building" isCentered>
        <ThunderstormSvg01 />
      </Section>

      <Section>
        <Text>
          Avoid using electrical equipment, phones, use battery-operated devices
          instead. Stay inside for 30 minutes after the last thunder and keep
          away from windows. Don't take a shower, or use plumbing
        </Text>
      </Section>

      <Section title="Outside The Building">
        <Text>
          Avoid sheltering under equipment, posts, fences, trees, as they
          attract lightning. Stay away from water and try to get out of open
          fields.
        </Text>
      </Section>

      <Section title="Driving during" subtitle="Thunderstorm" isCentered>
        <ThunderstormSvg02 />
      </Section>

      <Section>
        <List>Find a safe place to pull over and park</List>
        <List>Stay in the car</List>
        <List>Turn emergency flashers on</List>
        <List>
          Avoid touching surfaces that conduct electricity inside or outside the
          vehicle
        </List>
      </Section>

      <Section title="After" subtitle="Thunderstorm">
        <Text>
          If someone is struck by lightning, call for medical assistance, and if
          you are able administer first aid treatment. Check the area around the
          person for any dangers (live wires, broken glass). If there isn’t any,
          check the person for burns or injuries.
        </Text>
      </Section>
    </Screen>
  );
};
