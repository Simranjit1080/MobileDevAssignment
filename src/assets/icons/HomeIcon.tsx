import {IconProps} from '@types';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HomeIcon = ({color = '#fff', size = 24}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 10.1624C6 9.84445 6.15121 9.54543 6.40732 9.35698L11.4073 5.6777C11.7599 5.41828 12.2401 5.41828 12.5927 5.6777L17.5927 9.35698C17.8488 9.54543 18 9.84445 18 10.1624V18C18 18.5523 17.5523 19 17 19H7C6.44772 19 6 18.5523 6 18V10.1624Z"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
};
