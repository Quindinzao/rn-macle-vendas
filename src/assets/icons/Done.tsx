import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Done = (props: SvgProps) => (
  <Svg width={96} height={96} viewBox="0 0 96 96" fill="none" {...props}>
    <Rect width={96} height={96} fill="url(#pattern0_25_609)" />
    <Defs>
      <Pattern
        id="pattern0_25_609"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_25_609" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_25_609"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6UlEQVR4nO3cy27TQBhA4UHte6BuqiLUcFlw2ZQ2r8oOqRvgAfoqFQtUeqGocdWKxUFGrkAJKXHq5B97zreOZOv8M3biRElJkiRJkiRJkiRJkiRJkjQD2ALeA1+AE+ADsD37SnUOGAHfmHUB7HR/RE3HP2W+j39erXXHr1XAo26PrLRg/Nq1ueLi1z51ffyi0S7+lTfhuPj1tX/c5fGLhvHjGD+Q8QMZP5DxAxk/kPEDGT+Q8QMZP5DxAxnf+GXCB2vGXxqwCWykMlb+fsoF8Ao4An4Ct8DnPv3uhQHEv/nHiX4HXqfM0ef4tWblz3MJvEmZYgDxN5vLzn1+5DgEhvBup77hNtd8FhjC25QJhhD/TnPDXcQE2MvgfEeDiV+r3+00N1xy3wn0/Zo/D/ASOG+xE94FnONoUCu/T0Ng6PEfMISVb3FKiZ/jECgt/h3gRfQQKDV+DkOg9PhTQzhb5xAw/oOHcGD82CFUywwBV/5/Az1f1RAwftwQMP7KhzA2foZDwJUfNwSM3+kQWn1gwvihO2HSctf043l+NOBZi51Q9uOFHgyhMn7cECrjr/dJ5t+MHziEypXfMeAJ8NX4eQ+hcuWvfgi7zT8Nhnypr/R7CI+bv308bnbEIfDUOJIkSZIkSZIkKQ3ALwrR+GzEoezBAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default Done;
