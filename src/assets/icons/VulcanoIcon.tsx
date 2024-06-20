import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {colors} from '@constants';

export const VulcanoIcon = ({color = colors.white, size = 24}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1 18L7 10L11.5 16H19L14 9.35L11.5 12.65L10.25 11L14 6L23 18H1ZM5 16H9L7 13.325L5 16Z"
        fill={color}
      />
    </Svg>
  );
};
