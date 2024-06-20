import {IconProps} from '@types';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SurfingIcon = ({color = '#fff', size = 24}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 23V21H3C3.53333 21 4.05 20.9167 4.55 20.75C5.05 20.5833 5.53333 20.3333 6 20C6.46667 20.3333 6.95 20.5792 7.45 20.7375C7.95 20.8958 8.46667 20.975 9 20.975C9.53333 20.975 10.0542 20.8958 10.5625 20.7375C11.0708 20.5792 11.55 20.3333 12 20C12.4667 20.3333 12.95 20.5792 13.45 20.7375C13.95 20.8958 14.4667 20.975 15 20.975C15.5333 20.975 16.0542 20.8958 16.5625 20.7375C17.0708 20.5792 17.55 20.3333 18 20C18.45 20.3333 18.9292 20.5833 19.4375 20.75C19.9458 20.9167 20.4667 21 21 21H22V23H21C20.4833 23 19.975 22.9375 19.475 22.8125C18.975 22.6875 18.4833 22.5 18 22.25C17.5167 22.5 17.025 22.6875 16.525 22.8125C16.025 22.9375 15.5167 23 15 23C14.4833 23 13.975 22.9375 13.475 22.8125C12.975 22.6875 12.4833 22.5 12 22.25C11.5167 22.5 11.025 22.6875 10.525 22.8125C10.025 22.9375 9.51667 23 9 23C8.48333 23 7.975 22.9375 7.475 22.8125C6.975 22.6875 6.48333 22.5 6 22.25C5.51667 22.5 5.025 22.6875 4.525 22.8125C4.025 22.9375 3.51667 23 3 23H2ZM8.5 4L14.05 5.025C14.2833 5.05833 14.5083 5.15 14.725 5.3C14.9417 5.45 15.125 5.65833 15.275 5.925L16.15 7.475C16.5833 8.225 17.1833 8.83333 17.95 9.3C18.7167 9.76667 19.5667 10 20.5 10V12C19.2 12 18.0167 11.675 16.95 11.025C15.8833 10.375 15.0417 9.525 14.425 8.475L12.175 10L16 13V16.85C16.2667 17.0333 16.525 17.225 16.775 17.425C17.025 17.625 17.2667 17.8167 17.5 18C17.15 18.3 16.7667 18.5417 16.35 18.725C15.9333 18.9083 15.4833 19 15 19C14.4 19 13.8417 18.8583 13.325 18.575C12.8083 18.2917 12.3667 17.9333 12 17.5C11.6333 17.9333 11.1917 18.2917 10.675 18.575C10.1583 18.8583 9.6 19 9 19C8.83333 19 8.67083 18.9875 8.5125 18.9625C8.35417 18.9375 8.2 18.9 8.05 18.85C6.61667 17.8667 5.41667 16.875 4.45 15.875C3.48333 14.875 3 14.0083 3 13.275C3 12.7583 3.2 12.4167 3.6 12.25C4 12.0833 4.41667 12 4.85 12C5.33333 12 5.89167 12.0708 6.525 12.2125C7.15833 12.3542 7.83333 12.5583 8.55 12.825L8.025 9.725C7.95833 9.39167 7.99583 9.0625 8.1375 8.7375C8.27917 8.4125 8.5 8.15 8.8 7.95L10.95 6.5C10.9 6.5 10.7792 6.47917 10.5875 6.4375C10.3958 6.39583 10.1833 6.35417 9.95 6.3125C9.71667 6.27083 9.50417 6.22917 9.3125 6.1875C9.12083 6.14583 9 6.125 8.95 6.125L6.125 8.05L5 6.4L8.5 4ZM10.3 11.1L10.75 13.75C11.2 13.9667 11.7583 14.2542 12.425 14.6125C13.0917 14.9708 13.6167 15.2667 14 15.5V14L10.3 11.1ZM17 5.5C16.45 5.5 15.9792 5.30417 15.5875 4.9125C15.1958 4.52083 15 4.05 15 3.5C15 2.95 15.1958 2.47917 15.5875 2.0875C15.9792 1.69583 16.45 1.5 17 1.5C17.55 1.5 18.0208 1.69583 18.4125 2.0875C18.8042 2.47917 19 2.95 19 3.5C19 4.05 18.8042 4.52083 18.4125 4.9125C18.0208 5.30417 17.55 5.5 17 5.5Z"
        fill={color}
      />
    </Svg>
  );
};
