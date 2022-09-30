import React from 'react';
import {styles} from './Topic01Screen.style';
import {Screen, Header, Text, Section, List, size} from '@components';
import {View} from 'react-native';
import {AnaphylaxisSvg01, AnaphylaxisSvg02, AnaphylaxisSvg03} from '@svg';

export const Topic01Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Anaphylaxis</Text>
        </Header>
      }>
      <Section title="What is" subtitle="Anaphylaxis?">
        <Text>
          Anaphylaxis, also called anaphylactic shock, is a severe allergic
          reaction that makes it difficult for a person to breathe. Someone at
          risk of anaphylactic shock should always have an auto-injector. It
          contains medication that helps to ease the symptoms in an emergency.
        </Text>
      </Section>

      <Section isCentered>
        <AnaphylaxisSvg01 />
      </Section>

      <Section title="Symptoms" subtitle="of Anaphylaxis">
        <List>Difficult or noisy breathing</List>
        <List>Swelling or tightness of the throat</List>
        <List>Wheeze or persistent cough</List>
        <List>Persistent dizziness or collapse</List>
        <List>Paleness and floppiness in children</List>
        <List>Abdominal pain and vomiting</List>
      </Section>

      <Section title="How to" subtitle="Recognize">
        <List>A weak and rapid pulse</List>
        <List>Nausea, vomiting, or diarrhea</List>
        <List>Dizziness or fainting</List>
        <List>Low blood pressure (hypotension)</List>
        <List>Swelling of your lips, face, and eyes</List>
        <List>Hives or welts. Tingling mouth</List>
      </Section>

      <Section isCentered title="WHat to do" subtitle="to help">
        <AnaphylaxisSvg02 />
      </Section>

      <Section>
        <Text>
          When person is having a severe allergic reaction help them use an
          auto-injector if they have some. Lay the person flat, don’t stand, and
          call an ambulance. Make them as comfortable as possible while you wait
          for the ambulance.
        </Text>
      </Section>

      <Section isCentered topSpace={size.xl}>
        <AnaphylaxisSvg03 />
      </Section>

      <Section>
        <Text>
          If you are at risk of a severe allergic reaction, make sure you always
          have a: Mobile phone, Action plan, EpiPen®
        </Text>
        <Text>
          Wear medical identification jewelry this increases the likelihood that
          adrenaline will be administered in an emergency
        </Text>
      </Section>

      <View style={{height: 200}}></View>
    </Screen>
  );
};
