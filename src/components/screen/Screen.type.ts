import type {ReactNode} from 'react';
import type {ScrollViewProps, ViewStyle, StyleProp} from 'react-native';

export type TScreenProps = {
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;

  children: ReactNode;

  footer?: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;

  header?: ReactNode;
  headerStyle?: StyleProp<ViewStyle>;

  isScrollViewDisabled?: boolean;
  isFooterSticky?: boolean;
  isHeaderSticky?: boolean;
} & ScrollViewProps;
