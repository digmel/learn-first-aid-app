export type TListVariation = 'Empty' | 'Correct' | 'Wrong';

export type TListProps = {
  children?: String;
  variation?: TListVariation;
  onPress?: Function;
  isDisabled?: boolean;
};
