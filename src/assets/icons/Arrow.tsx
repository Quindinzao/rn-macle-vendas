import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Arrow = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Rect width={32} height={32} fill="url(#pattern0_23_439)" />
    <Defs>
      <Pattern
        id="pattern0_23_439"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_23_439" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_23_439"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR4nO3cwUrDQBSF4apv4qKiIIIK9ZkVUelCXfk2utJWRSp18UuwC0GaBpP23nb+7wXmck46SWCaXk+SJEmSJEmSpLIBW9EzFAnYB66BMTAB7oCj6LmKAAyAEX+9W8Jqwh8z3+2yZygWi8Nnth15XwgKv/LR+eKlo3n4lcvoeUsOfwTsRs+8MYAT4KVh+FVJg+iZN4bhBzL8QIYfyPADGX4gww9k+IEMP5DhBzL8QIYfyPADGX4gww9k+IEMP5DhBzL8QIYfyPDX5/RC6V6BG+Cgq/D35pzVVL3qLOthFwVcLFhI8913UcBTzQKqNwV22hbwuGARLbmA85oFtIItqO9N+F/eOrkJz0rwMbS56onxqvqbVSfh/yrhGHhuOET1znDW6QCyhBT8JSRgCQlYQgKWkIAlJGAJCVhCApaQgCUkYAkJWEIClpCAJSRgCQlYQgKWkIAlJGAJCVjCen6yrB89c+klDKPnLX07+mx91E+tSphaQOx29OAFHPfx7glwagErwM+B4OFsz/+qrnzDDwBsu+dLkiRJkiRJktRr6xtXW0Bb7MsLlwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default Arrow;
