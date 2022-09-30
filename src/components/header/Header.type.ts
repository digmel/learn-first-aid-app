import type {ReactNode} from 'react';
import type {ViewStyle, StyleProp} from 'react-native';

export type THeaderProps = {
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;

  containerLeftStyle?: StyleProp<ViewStyle>;
  containerRightStyle?: StyleProp<ViewStyle>;

  hasBack?: boolean;
  hasMenu?: boolean;
};
