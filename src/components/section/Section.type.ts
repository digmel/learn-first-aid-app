import type {ReactNode} from 'react';
import type {ViewStyle, StyleProp} from 'react-native';

export type TSectionProps = {
  title?: String;
  subtitle?: String;
  isCentered?: boolean;
  children: ReactNode;
  isFullWidth?: boolean;
  topSpace?: number;
  bottomSpace?: number;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};
