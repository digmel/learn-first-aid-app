import {StyleSheet} from 'react-native';
import {size} from '@components';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: size.l,
    paddingHorizontal: size.l,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLeft: {
    justifyContent: 'center',
    paddingRight: size.l,
  },
  containerRight: {
    justifyContent: 'center',
  },
});
