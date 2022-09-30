import {StyleSheet} from 'react-native';
import {size, color} from '@components';

const PADDING_HORIZONTAL = size.xl;

export const styles = StyleSheet.create({
  globalWrapper: {
    flex: 1,
    backgroundColor: color.light,
  },

  container: {
    flexGrow: 1,
  },

  header: {
    zIndex: 1,
  },

  stickyHeader: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
  },

  footer: {},

  stickyFooter: {
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
