import React, {FC} from 'react';
import {TExamScreenViewProps} from './ExamScreen.type';
import {styles} from './ExamScreen.style';
import {
  Section,
  Screen,
  Text,
  Header,
  List,
  Button,
  color,
  size,
  ProgressBar,
} from '@components';
import {View} from 'react-native';

export const ExamScreenView: FC<TExamScreenViewProps> = ({
  index,
  onPressNext,
  onPressPrevious,
  onPressA,
  onPressB,
  onPressC,
  onPressD,
  AnswerA,
  AnswerB,
  AnswerC,
  AnswerD,
  AnswerStatus,
  showDetails,
  examData,
  isPreviousButtonDisabled,
  isNextButtonDisabled,
  isTestButtonDisabled,
}) => {
  return (
    <Screen
      isScrollViewDisabled
      contentStyle={styles.content}
      header={
        <Header hasBack>
          <Text>Knowledge Test</Text>
        </Header>
      }>
      <View style={styles.testView}>
        <Section>
          <Text variation="body_bold">{examData.question}</Text>
        </Section>

        <Section>
          <List
            variation={AnswerA}
            onPress={onPressA}
            isDisabled={isTestButtonDisabled}>
            {examData.A}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerB}
            onPress={onPressB}
            isDisabled={isTestButtonDisabled}>
            {examData.B}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerC}
            onPress={onPressC}
            isDisabled={isTestButtonDisabled}>
            {examData.C}
          </List>
        </Section>

        <Section>
          <List
            variation={AnswerD}
            onPress={onPressD}
            isDisabled={isTestButtonDisabled}>
            {examData.D}
          </List>
        </Section>
      </View>

      <Section
        isFullWidth
        contentStyle={styles.detailsSection}
        topSpace={size.m}>
        {showDetails && (
          <View style={styles.detailsView}>
            <View style={styles.headline}>
              <Text
                variation="body_bold"
                color={AnswerStatus ? color.success : color.error}>
                {AnswerStatus ? 'Correct' : 'Wrong'}
              </Text>
            </View>

            <View style={styles.details}>
              <Text variation="subtitle">{examData.details}</Text>
            </View>
          </View>
        )}
      </Section>

      <Section isCentered>
        <ProgressBar progressIndex={index} />
      </Section>

      <View style={styles.navigationContainer}>
        <View style={styles.buttonContainer}>
          <Button
            text="Previous"
            variation="secondary"
            onPress={onPressPrevious}
            isDisabled={isPreviousButtonDisabled}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Next"
            onPress={onPressNext}
            isDisabled={isNextButtonDisabled}
          />
        </View>
      </View>
    </Screen>
  );
};
