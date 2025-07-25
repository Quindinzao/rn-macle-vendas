import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const HistoryInactive = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Rect width={32} height={32} fill="url(#pattern0_273_228)" />
    <Defs>
      <Pattern
        id="pattern0_273_228"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_273_228" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_273_228"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADc0lEQVR4nO2dyWoVQRiFC65Lp5VxXIuRgK/gIg4YzAsIggsVn8WFIg64F1SEOGMueQRx4Zg8geCU5EaUxMgnRXphQm53he6q6qo+HwSy6e5z/tO3qrpu3WpjhBBCCCGEEEIIIYRoAOAAcAV4CXwCfpIfA+ANcB+4AOyKfvMAe4HbwB+6x2/gOrA7VvFPAwuxq9ACvgDjoYt/CViN7bxFrADnQxX/ZEebnCr+AqdCtPlqdobzFRjxGcCdkouLNW74HGqq6almGdjvIwA7zq/iLXAG2G4SALiLHy77EPvCofhJFN4CHPP4iX5mmgaYq7johEkIYAZ/zPkQbB/Fy0jp7t9WjN19MfAhuhSTEEAPvyz4EJ1NABbPATwwTaMAnPkGHFQAFdA8i/bO91J8F8EmMUjNT3KCc/OTnODc/CQnODc/TQgGjgJPiw6raew5nwCjofwEpa5gYAxYwj/2GmO+/QSnrmCgTzimffsJTh3BrD36+5x72Yi9Vs+XnyjUEYwCiBtAhCbolamg6gSmbSTUCQ/UCQ8PYRR4DMx7KLw95xRwJMQNFZzkBOfmJznBuflJTnBufpITnJufJgSjuaB4AaC5oOgB9AmH5oI2FL+nuaCInwAUQNwALJoLih/AmOaCIgZg0VxQ5ADaRHJ+khOcm5/kBOfmJznBuflpwVzQ4lbW/YTwE5QWDUOXXL5y9O2n63NB07H9BKdlUxErVet+fPqJQsUWBfMVx/YUQP0AbAc4jCmH4/s0RyeboNEhnejAZWRCc52w07qf7AL4r4jTxX4Iy8X/zsWg3rqgLa37yTKADW16rU4wNkkHkAMogLgogMgogMgogMgogMgogMi0MgDgEPDIYXOmNjIoHtQOO3otxX+1Ny/+d9Lnh/Xi4LeUMFVfL8je+bnw0MFvKWGqvl5Qis3OMBYd/JYSpur5BlC6iSCwk9Cb7lUBzJIXEyVeJyuOnQ1bfbeNWVPjHbBjyN3/IfjGqw1tTZwa74GzNojib9Kh+H62HnYIQJtzr2G/aNoXPIAihFuFiC5zLUrxiwBGPG0jkNL7YPZEC6AIYbyj7wlYBU6YNgBc7NhLepaBc6ZNFC/r6UJz9Bk4btpI0SfcDPwT01D8Aq7a5wLTduywzI6NgefAx0A/tmsau7z9NXDPvvNrs4c0IYQQQgghhDAN8g8Rtk8wpGUaygAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default HistoryInactive;
