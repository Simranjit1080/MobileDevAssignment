import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import GradientText from './GradientText';
import {ImageWithTextProps} from '@types';

export const ImageWithText = ({
  textStyle,
  style,
  imageSource,
  text,
}: ImageWithTextProps) => {
  return (
    <ImageBackground
      imageStyle={styles.imageStyle}
      style={style}
      resizeMode="cover"
      source={imageSource}>
      <GradientText style={textStyle}>{text}</GradientText>
    </ImageBackground>
  );
};

export default ImageWithText;

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
