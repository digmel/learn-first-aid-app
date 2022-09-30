import React from 'react';
import {styles} from './Topic04Screen.style';
import {Screen, Header, Text, Section, List} from '@components';
import {DiabetesSvg01, DiabetesSvg02, DiabetesSvg03, DiabetesSvg04} from '@svg';

export const Topic04Screen = () => {
  return (
    <Screen
      isHeaderSticky
      style={styles.container}
      header={
        <Header hasBack>
          <Text variation="subtitle">Diabetes</Text>
        </Header>
      }>
      <Section title="What is" subtitle="diabetes?">
        <Text>
          Diabetes is a medical condition where the body can’t produce enough
          insulin.
        </Text>
      </Section>

      <Section isCentered>
        <DiabetesSvg01 />
      </Section>

      <Section title="Causes of high sugar level">
        <Text>
          Hyperglycemia is the medical term for a high blood sugar level. Causes
          can be if a person hasn't taken medication, or eaten too much sugary
          or starchy food.
        </Text>
      </Section>

      <Section isCentered title="Symptoms of High Sugar Level">
        <DiabetesSvg02 />
      </Section>

      <Section>
        <List>Warm and/or dry skin</List>
        <List>Rapid pulse and breathing</List>
        <List>Fruity, sweet breath, excessive thirst</List>
        <List>Drowsiness, become unresponsive</List>
      </Section>

      <Section title="High Sugar Level Emergency">
        <Text>
          Call for emergency and keep checking their breathing, pulse. If they
          become unresponsive, open their airway, check their breathing and
          prepare to start CPR.
        </Text>
      </Section>

      <Section isCentered>
        <DiabetesSvg03 />
      </Section>

      <Section title="Causes of Low Sugar Level">
        <Text>
          Hypoglycaemia is the medical term for a low blood sugar level. It can
          be caused if a person take too much medication or insulin. Also,
          alcohol, skipping a meal or physical activity could be reasons.
        </Text>
      </Section>

      <Section>
        <Text variation="H1_bold">Symptoms of Low Sugar Level</Text>
      </Section>

      <Section isCentered>
        <DiabetesSvg04 />
      </Section>

      <Section>
        <List>Weakness, faintness or hunger</List>
        <List>Confusion and irrational behavior</List>
        <List>Sweating with cold, clammy skin</List>
        <List>Rapid pulse, palpitations, trembling</List>
        <List>Deteriorating level of response</List>
      </Section>

      <Section title="Low Sugar Level Emergency">
        <Text>
          If they do not have their own glucose gel, give them something sugary,
          like juice. Don’t give something to eat or drink, if they aren’t fully
          alert. Check their blood sugar level and call an ambulance. If they
          are unresponsive open the airway, check breathing, give CPR.
        </Text>
      </Section>
    </Screen>
  );
};
