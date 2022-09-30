import {Text} from '@components';
import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './ProgressBar.style';
import type {TProgressBarProps} from './ProgressBar.type';

export const ProgressBar: FC<TProgressBarProps> = ({progressIndex}) => {
  let fillerWidth: number = 10 + progressIndex * 10;

  const dynamicFillerStyle = {
    width: fillerWidth,
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.filler, dynamicFillerStyle]} />
      </View>
      <View style={styles.textContainer}>
        <Text>{progressIndex}/12</Text>
      </View>
    </View>
  );
};
