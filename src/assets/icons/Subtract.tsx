import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Subtract = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Rect width={16} height={16} fill="url(#pattern0_147_151)" />
    <Defs>
      <Pattern
        id="pattern0_147_151"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_147_151" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_147_151"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nO3VMU7DQBRFUUtZDUGscawsJwXzQxXYFIJ0NC8aehTFdgHoHMkbuG/GM00AAAAAAAAAAAAAAAAAAAAA/CuHUx5b5WXu+Zgr8eXnBqNRz6lV9tvE73maKxfRc+/Bu4x2qwdoPW/iZ+mtf10V/3jMrlW+DJBFA4x2o6EB6o8O4BeUtQOcp7U8wlkWv+dzk0f4+xZU9q2n5sq79yC34o9G/fCch03iAwAAAAAAAAAAAAAAAAAAADD9Flf28+aQLmxgTQAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default Subtract;
