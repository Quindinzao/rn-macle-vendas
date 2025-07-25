import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Filter = (props: SvgProps) => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <Rect width={30} height={30} fill="url(#pattern0_163_197)" />
    <Defs>
      <Pattern
        id="pattern0_163_197"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_163_197" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_163_197"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2dz2pTQRSHB93Y9JxkqQVd+A/BhaZzaok7d2506Ru4KPgq1sdQSUUXCvoAIgrJmVSfQBBEodF2qxC52pVQMzW998zM/X0wy4Rz5ps78wuZEOcAAAAAAAAAAAAAAPgHJ9Y+nGEfnpDXPZYwa/Og33Ogz3ht+1Jjk09ed6wb58QGiU6rualdQLXyrZvldMewdgHYdsKBg3zYrV2AdZOc+IAAgYBWDwcBod0CXOGwdf/mBRhj3v+8AjoyWnGF0pHRSvICSHR88spk2ZXG4M0Sib5NQIB+iZDwwt0ZHnfFMDvGok/nHsI+fK69FBZ9HJMGyOumKwTyuhnXc3hYezG99cnZ6iN3VEEy3nCZQzLeiJz83WpuGimq6yc32YcfEY/kT/aTWy5Tuofpc3Vyu9HiSPRu5Fa01+nrVZcZ1NfLJPotpsdlH+7ZFOn1QUyBLPppaX37tMuEzrV3p0jCxwzOush0kFM8HcTFzXTSXnYFF7igqk+I0Y+shPsu87jJKW6pfw6t8D3pQ6v0UJF0bCuw7iJWEmX+5Ga9l3YKObvyTBODktJbdg3O0l8gJT/ilMkWWeQhR5mFhKJiXjeROkywXnmU2JNogtXe20n0LDLAIH0MUk5jFjQ6IbN2xM1Uv/CgQr8wyuIrP2pj3EwlFnZbcmkgyWsfvZZdm2k2nvrwaN57tfHi2BEwi00rX+e9UzuvTiZ0+ZURN22vf3OLr88fCVyzgGa6yBiGAFsYAmxhCLCFIcAWhgBbGAJsYQiwhSHAFoYAWxgCbGEIsIUhwBaGAFsYAmxhCLCFIcAWhgBbGAJs4TkTyH40WOT1zXVSqgCpJOjrZQk3/uf1zXdUogA5WAQELAiJTg8l4S8RELAg7MPWoQXsD5LwEgIWhPt6sc4/iLDuLwt6a+/PxaxmCKgZ9qMBiT6HgIJEOGArwgFbEQ7YiSDRqXXNRcKr4+sk+mquBB+2rGttrQjyutOV0XnrGlsjgqu/WhSd7v8WedhdHV+wrgsAAAAAAAAAqhn4BYvZ9VdyDQApAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default Filter;
