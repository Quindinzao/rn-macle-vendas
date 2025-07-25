import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const ShoppingCartInactive = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Rect width={32} height={32} fill="url(#pattern0_273_226)" />
    <Defs>
      <Pattern
        id="pattern0_273_226"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_273_226" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_273_226"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADyElEQVR4nO2dSWsUQRiGyy16ET0IHkTQg4I76B8QURG8ul3E5SIR9Q+o+ANED1GPkih4EUWNXuJBEFxPUcEFr14iKDHGfXuktIQykKnuGbuqrO97YCCEod+v++uZt+rtnmpjFEVRFEVRFEURCbAE6AdG+Jv3wGPgIrAFmJq61uIAlgGjVGMI2Jy65qIArlOfXmBS6tqLAPhCe5wGJqSuX3IDlGq8dR668F9+BSn1eQ0s6NSElc64MN6nYDFwGRjuUEBpzXBdf5gJnAxsVKnOm1oNcE2YAryqIaKMz53aDXBNuNpio0p1etptwOEaIsr47Gi3AetpzUsjHGCSy85asbTdjVsz/h7Y+DwjGH4P51thmzO5E4FnAYGtRjDArkYM2BM4ExA4ZgRDeLje06nA3oDALSMY4G4jBuwJrAoIfLRzBiMQmjTgMROyDwGRlUYgwPJGDdgTuh0Q6jYCoWkD9oSOB4T6jEBo2oA9oW0BoadGIDRtwJ7Q/IDQDztpM4IghgGPEbR3RrRirREEsQy4RjJ60AiCWAbsCR4KCPYbQRDLgD3BdQFBUckosQzYE5yhyWgiA/6DHW4GREUko8Q2YE+4LyAsIhkltgF7wpqMmgQG7DVAk1Hz6zjci2rAXgPEJ6PA5Arp8L83YK8JopNRUhmwV4DoZBTYncSAvQK2Sk5GgVNJDLhGMvq95GSUsAHvjFGEyGQUmAt8S2bAXiH2l5WiklF+xw9XAvv9plEDlpiMAtOB1cANwpyPVVQoGZXKplgNqJKMSuMJMDFKAyomo5L4AWyIdvArJqOSOBr14LsGdKfe60w4l2T1gArJaOl8BY5E/d5vIxktlQF7AiY58GOacIvy+QS8AG66M36FyYUKyWhv6hqLpkIy+iR1jUVjf6AXaIC4e0ajIzUZzYYKyeih1DUWjY2eAw14mLrGogHWEGZP6jqLBehyFyJCs8Yetz7RlNQ1FwdwlvIZcVfEFpvcABZVuFZaCqN2fQiTG8JW2BowuQFMAx4gg89ZLmALzAYeUT5fsmyABZgFXKNsBkzuANuB55S5Iu4y8z9grxYBG4ETzh+G/uO7KYaBS3bEl/q4KoqiKEpb2OfRAAfcffbv3Mv+vT/Fs2pyq6dRgDmB2fKgfY/UemKcaVWiisEYZ15u9TSO+5hXZZ+0ehoHuF9jh+9Kq6dxaj4uZVRaPSazHR6RVo+R9pEns3oax42rczLh/TnVYyIN++yQLoR9T5e0emJOfAYzm4hlU0/M+4j2uUXvRt3rjvtfl/R6FEVRFEVRFEUxxfITHDhp7M5B07cAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default ShoppingCartInactive;
