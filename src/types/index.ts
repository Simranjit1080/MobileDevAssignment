import {TabNavigatorParams} from '@navigators';
import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type IconProps = {
  color?: string;
  size?: number;
};

export type ImageWithTextProps = {
  text: string;
  textStyle: StyleProp<TextStyle>;
  style: StyleProp<ViewStyle>;
  imageSource: ImageSourcePropType;
};

export type HighlightsTile = {
  image: ImageSourcePropType;
  title: string;
  navScreen: keyof Omit<TabNavigatorParams, 'Home'>;
  subTitle: string;
  details: string;
  topSpots: Array<string>;
};

export type HighlightsTileProps = {
  item: HighlightsTile;
  onPress: () => void;
};

export type FabProps = {
  text: string;
};
