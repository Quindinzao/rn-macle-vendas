import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Card = (props: SvgProps) => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
    <Rect width={48} height={48} fill="url(#pattern0_21_105)" />
    <Defs>
      <Pattern
        id="pattern0_21_105"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_21_105" transform="scale(0.01)" />
      </Pattern>
      <Image
        id="image0_21_105"
        width={100}
        height={100}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKElEQVR4nO2dTU/UQBiAJ2ZnEgLbWTCERM/eRL2I/gUveuH/eIN4Ag0XAvNiwAMe/DtKOJhovBES8SNyEjO7GGlh7bY7XcfO8yS9tc3s+3TeaWe6b5UCAAAAAAAAAAAAAAAAAChhU1vjlq2RV1a7d5lx36yRMzYZGoPMyFcfq37MjFv2MQxymfWMPLHaHRJ8Ge8C1O7Qx3IMFU+vWS2riJCAmcD9tNqt+NhW1oEMaS4l96VUTVPeZt7uj0zLWtbZWlpQu9OVDSfGgtqd9rHKtFv3sSv2lJ7ZfjziqTZ1cczItPswq7dvN/wbWsuslsVMu4/FMWWkgf78birXM5ARRoo1clqI7XLpgYPbtIu9Q9YCtAdUf1x+XhhP9sqFaDnICenIfaIZhm7HPcinLTkoPaj/QHPhoHm1MROoPckzrzZmig+PpUEp3qIlH8XAVI4vQpoFIZGBkBSFdI3cyrR7kxn5UjZtcL7P67mplzdVgtimhXgZ1shxjTmdoxSl2KaF+J4xxuznvkoM27iQEdLUX9LXZ5UYtmkhTe9fl0zLs8uzrM1tmZb3XeMelbUrSSFW79yblIi8FPcp+O9HiCCkCayW1czId1JW4B7YNpJMWUkLyYw7qT0Ictt7FlyInwapn6d5MFShhfjpDz8NUkPI0fWp7RsqMWzTKcvjA+uv9lHS12Aft5+ijIkJgdFBSGQgJDIQEhkIiQyERAZCIgMhkYGQyEBIcrO9Fdeuh609t/U8ExVSd+26uPbc1vNcBUJMQkLqrF0P69ptPc/EhUA1EBIZCIkMhEQGQiIDIakJifUt81iJ8sFwfCmu9AEsVhCSWsqK9S3zWGFQjwyE/O9Cin/ipPhMOObUXpZLv8ad1CjPtLUUsE1J0+3sPKxcnulyATO3PpHWJoDV7kX1AmZXlviTxYm0uMX0tLtbq8Tf8CKYSKlLT2/dqV0Ec3iZWDn1NQN9HmSgL8fHqD9mDNLU6RhlYgdQSFniKaT8p9S4W7mip7CZf1Bq/De+a1GMX0L0isPKaWr0z1XkK5eyyZDPVchbf2sb9HMVAAAAAAAAAAAAAAAAAKDayy8FOcGbyCqNxQAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default Card;
