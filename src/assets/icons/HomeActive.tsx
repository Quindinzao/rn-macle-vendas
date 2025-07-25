import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const HomeActive = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Rect width={32} height={32} fill="url(#pattern0_273_217)" />
    <Defs>
      <Pattern
        id="pattern0_273_217"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_273_217" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_273_217"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAECElEQVR4nO2cPYxNQRTHx3fioxBEbNAgaKhUqJRolVqlTunMe2ttRKXBtlRe7DvzHpH4CNFp2IaGRiIKya5YsQixf5mbl7AfsffN3Ovcue/8kmk22XvPOf8zZ+bMvfcZoyiKoiiKoiQCdXCAGC1ifCSHT+Rw2/9N2q7aM3oXGy3jimX8tA6YN36Rw42RFrZI21k7iLCcHE5bhw+LBH7O8LPCOpxttbBC2u5a0OjiEDGeLRX4RcYEtXFE2v5kuTCObb6kEGM2IPh/jzvUxU5pf5JhbAyrfAmxjOnIwP8ZjBli2Cv3sEbav0rTYByzjFeFBX6hEG+ojRPSflaO4TZ2+W1laYFfKMTDZhv7zaBz+T7WWYcRYnwPDOa73uj7f3v3HPE2mEGkwThJDm+Dgufww/cDlxw2UBdrfX23jG+Bs+G93+IaYJkZBKiLfcR4UHT5GI4tY4ynzXEcNAPaxSLPAtpwOF7yQl6/brqfLtYuXqu/9LuFjN3K1qabjuhi4Ruw7MAtoonyzZx1GPOZHTgjJhqMo2bQulhivCjyGCEmEZLqpgvoYqfKmvqxpbDy3XQqi99oAZuBSnXTqW7/qIt91uF+st10XRqgRkENoRo9CMlUVhdbFSpbTmMXLmK8ztPFVmlDQYyX4hsKv3WzjDPkMBkY+M/EOEctrDaJQS2szmxnfA5cHyaz2BGWhxqwnhiPAwM/axk3yWHIJA45DGW+hDaVDo+Cjrx7LXxIHXze6OCwqRmNDg573wJFuNp/Rxu4IwiecgmQleQwAb7SE6zMfaORDrYGLkAwNccGxsXHNPdN/FlM70hWBShGgKm+K4N1IBVgIYEl6LzpF1+zyOH6nNWfMaMlCEttQmbm7QavRZ3uNu9gj2+zqY1TF9vYpALg39nexWYfqyxmHew2RaMCQHYTogJABZBEPAHFDRBG3H9xA4QR91/cAGHE/Rc3QBhx/8UNEEbcf3EDhBH3X9wAYcT9FzdAGHH/izBgmLEj+7qdl37e2nuu3G467M1rY5nXT14AH5zeO6Doc0zROLZLXz95AXxmBgQHvWxtSV8/fQECX/OwfjCmpa+fvADBwXFpXN+UTeoBsiqAChBF6hlqdQaoAFGknqFWZ4AKEEXqGWp1BpQbIIpoxPwvMJadgNFUPUOJ0Y4Q4HbZ/tdegKbD3tDDOP8WYNn+114Ajz/VzD62y/PFPmPaZ36e4HtUAGFUAGFUAGFUAGFUAGFUAGFUAGFUAGFUAGFUAGFUAGFUAGEqL8CgD6MCQAWQzkKrM0A+ELauJSjq5deaD8rxTDka68DSjtrqjlulC+CfuYb+mFOdBzlM5vnAoxCyT4DyPnOt++AsBrf+W/AVRVEURVEURVEURVEUkyq/AfIMl/TBCNoUAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default HomeActive;
