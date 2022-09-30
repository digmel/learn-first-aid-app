import {StyleSheet} from 'react-native';
import {color, size} from '@components';

export const styles = StyleSheet.create({
  container: {
    width: 130,
    height: size.s,
    borderColor: color.primary,
    borderRadius: size.xxl,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  textContainer: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: size.xs,
  },

  filler: {
    height: size.s,
    borderRadius: size.xxl,
    backgroundColor: color.primary,
  },
});
