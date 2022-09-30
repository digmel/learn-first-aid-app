import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './Screen.style';
import {size} from '@components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TScreenProps} from './Screen.type';

export const Screen: FC<TScreenProps> = ({
  containerStyle,
  contentStyle,
  children,
  footer,
  footerStyle,
  header,
  headerStyle,
  isScrollViewDisabled = false,
  isFooterSticky = false,
  isHeaderSticky = false,
  ...props
}) => {
  const {bottom: spaceBottom, top: spaceTop} = useSafeAreaInsets();

  const safeAreaStyle = !header &&
    !footer && {
      paddingTop: spaceTop === 0 ? size.xl : spaceTop,
      paddingBottom: spaceBottom === 0 ? size.xl : spaceBottom,
    };

  const contentDynamicStyle = {
    ...safeAreaStyle,
  };

  const Container = isScrollViewDisabled ? View : ScrollView;

  const containerDynamicStyle = isScrollViewDisabled
    ? {style: [styles.container, containerStyle]}
    : {contentContainerStyle: [styles.container, containerStyle]};

  return (
    <View style={styles.globalWrapper} {...props}>
      {!!header && isHeaderSticky && (
        <View
          style={[
            styles.header,
            headerStyle,
            styles.stickyHeader,
            containerStyle,
          ]}>
          {header}
        </View>
      )}
      <Container {...containerDynamicStyle}>
        {!!header && !isHeaderSticky && (
          <View style={[styles.header, headerStyle]}>{header}</View>
        )}

        <View style={[styles.content, contentDynamicStyle, contentStyle]}>
          {children}
        </View>

        {!!footer && !isFooterSticky && (
          <View style={[styles.footer, footerStyle]}>{footer}</View>
        )}
      </Container>
      {!!footer && isFooterSticky && (
        <View style={[styles.footer, footerStyle, styles.stickyFooter]}>
          {footer}
        </View>
      )}
    </View>
  );
};
