import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {color} from '@components';

import type {TLoaderProps} from './Loader.type';
import styles from './Loader.style';

export const Loader: FC<TLoaderProps> = ({
  isLoading = false,
  children,
  loaderColor = color.primary,
}) => {
  return isLoading ? (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator
        size="small"
        color={loaderColor}
        testID="activity_indicator"
      />
    </View>
  ) : (
    (children as React.ReactElement)
  );
};
