import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Logo = (props: SvgProps) => (
  <Svg width={477} height={466} viewBox="0 0 477 466" fill="none" {...props}>
    <Path d="M114 394H186V466H114V394Z" fill="white" />
    <Path d="M341 394H413V466H341V394Z" fill="white" />
    <Path d="M50 0H82V100H50V0Z" fill="white" />
    <Path d="M0 0H50V32H0V0Z" fill="white" />
    <Path d="M50 135H82V362H50V135Z" fill="white" />
    <Path d="M82 135H445V167H82V135Z" fill="white" />
    <Path d="M82 330H445V362H82V330Z" fill="white" />
    <Path d="M445 135H477V362H445V135Z" fill="white" />
  </Svg>
);
export default Logo;
