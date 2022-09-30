import {ViewStyle, StyleProp, TextStyle, TextInputProps} from 'react-native';
import type {size} from '@components';

export interface TTextInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  isDisabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconLeft?: string;
  iconRight?: string;
  iconSize?: typeof size;
  iconContainerStyle?: StyleProp<ViewStyle>;
}
