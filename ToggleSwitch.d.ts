import React from 'react';

export type ToggleSwitchProps = {
  isOn: boolean;
  label?: string;
  onColor?: string;
  offColor?: string;
  size?: string;
  labelStyle?: object | number;
  thumbOnStyle?: object | number;
  thumbOffStyle?: object | number;
  trackOnStyle?: object | number;
  trackOffStyle?: object | number;
  onToggle?: (isOn: boolean) => any;
  icon?: object;
  disabled?: boolean;
  animationSpeed?: number;
  useNativeDriver?: boolean;
  circleColor?: string;
}

type ToggleSwitch = React.ComponentType<ToggleSwitchProps>;

export default ToggleSwitch;
