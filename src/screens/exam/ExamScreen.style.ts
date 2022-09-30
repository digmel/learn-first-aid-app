import {StyleSheet} from 'react-native';
import {color, size} from '@components';

export const styles = StyleSheet.create({
  container: {},

  content: {
    justifyContent: 'space-between',
  },

  testView: {
    flexBasis: '35%',
  },

  detailsSection: {
    flexBasis: '35%',
  },

  detailsView: {
    backgroundColor: color.gray100,
    flexGrow: 1,
  },
  headline: {
    marginHorizontal: size.xl,
    marginTop: size.l,
    paddingBottom: size.m,
    marginBottom: size.m,
    borderBottomColor: color.dark,
    borderBottomWidth: 1,
  },

  details: {
    marginHorizontal: size.xl,
  },

  navigationContainer: {
    flexBasis: '15%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  buttonContainer: {
    flexBasis: '50%',
    paddingHorizontal: size.s,
  },
});
