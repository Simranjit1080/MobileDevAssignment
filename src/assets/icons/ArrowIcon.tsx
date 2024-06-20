import {colors} from '@constants';
import {IconProps} from '@types';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowIcon = ({color = colors.white, size = 16}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z"
        fill={color}
      />
    </Svg>
  );
};
