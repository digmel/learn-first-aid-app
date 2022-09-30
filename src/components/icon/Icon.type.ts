import {TextStyle, ViewStyle, StyleProp} from 'react-native';

export type TIconProps = {
  name: String;
  size?: number;
  color?: String;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
};
