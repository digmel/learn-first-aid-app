import {StyleSheet} from 'react-native';
import {size, color} from '@components';

const HEIGHT_LARGE = 48;
const BORDER_WIDTH = 1;

export const styles = StyleSheet.create({
  container: {},

  input: {
    justifyContent: 'center',
    borderRadius: size.s,
    height: HEIGHT_LARGE,
    borderWidth: BORDER_WIDTH,
    paddingHorizontal: size.l,
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    color: color.gray500,
  },

  labelContainer: {
    marginLeft: size.m,
    paddingHorizontal: size.xxs,
    zIndex: 1,
    borderBottomColor: color.light,
    borderBottomWidth: 1,
    marginBottom: -1,
    alignSelf: 'flex-start',
  },

  label: {
    alignSelf: 'flex-start',
    marginBottom: -size.s,
  },

  errorContainer: {
    alignSelf: 'flex-start',
    marginTop: size.xs,
  },
});
