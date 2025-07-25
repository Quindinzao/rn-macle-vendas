import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const HistoryActive = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Rect width={32} height={32} fill="url(#pattern0_273_222)" />
    <Defs>
      <Pattern
        id="pattern0_273_222"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_273_222" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_273_222"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD8UlEQVR4nO2dyWpVQRCGD+jSaeXsWlQEX8GFE4q+gCC4UPElqu81goILRRxwL+jB3KrrhBHBFxAXjskTCE4xiSjRyC8dExBN7rnh9HC6b31Qy+RU1V89nL6H6qJQFEVRFEVRFEVRFEVRFAcM3cMmYpwmwUPDeEuMr0aAnIwYk8R4ToJbJDh+rsTq6MVD97HeMK4Zxs/YCTKhjfHdMC4RY02U5Lc6OECCL9ETIZFHhuB9q4s9QZNvGCdJMBM7eNMQI8EP08WxIMlvMfYN5JQjlfaLutjvfc7XaQeLi8D4cLaLdf4EEFxvQKWh0ca47G2rqVMP+hFhmgQbnQtg9/lVDyfBi5bgIJVYUSQAMW74GAUkOOXcWSN4UJX8VBJvIcYujyP6XuEaIxjrKUAHh4qEIMETj2vBmHuHGZM9BUip+p9i+eze3ZMANlfOna56aJEQZYllHqvfTsdfnDudkwAWnwIYwe3CNSoA+q3+jzSMzSpABc6rnjFhK99L8vtxuEgMk1o8yTmcWzzJOZxbPMk5nFs8Lhxud7GDBHfnFiz3iyCjS4LtoeIJSl2H24ydRjDlPPH/25R9lu94glPXYWI8DpD8eRvxHU9w6jhclljm8+zlX7PPss/0FU8UVIDIpDQFkeCR73iCk8oiTIxJXYQXgQTbiSFGMO4h+fZ/cruDbSEKKjjJOZxbPMk5nFs8yTmcWzzJOZxbPC4cbutZUDwB2noWFFcA0rOgeAKUehZUHxUgMilNQaRnQf/T1rOguCPAomdBg/Tikls8yTmcWzzJOZxbPMk5nFs80c+CeGnf/YSIJygN2oZO9fOTo+94gtOwF7GR2PEEp0lnQdTHdz8+44lCRYuC8V5/W6oA9bELYA8BuFJA1imoFnb3sdAiOttJqo+dSdvRItzvdz/ZTUF/JXHE9kOYs5GlJIPqfRe0pO9+shTg7zm97iIYm6QFyAGjAsRFBYiMChAZFSAyKkBkVIDINFKAM4wtJLhT1ZypiUZ/fOa2YGuSAtjkG8Gn2Ik09YX4bGNJTgBb+bGTZ9yJUKYnQILTjlnMGBNV8aoA4nkU9GgiSA+xKnjTvSqIMZqVAJ3F22i2ujhSIcBo2Oz30Zg1QXt5XrBywepnvA7eeNVFa+LUjBivSHDYCmFttvKrk++n9XAV2pwb8wJMDw1jQxEDElyNXbUm/qi5WMTCXj7gqY0AUrkPhoaxtoiJvZBmEO8JIMEMdbC3aALEODFgl/RMUwdHiyYxe1nPIExHjHctwe6iicytCVdCthszgYwE30hwwb4XFE3Hbsvs3pgY90nwJlD3Qziu9AkSPDOCm/bOr4Ve0hRFURRFURRFUQqH/AZ2mq1SfUC0zgAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default HistoryActive;
