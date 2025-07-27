import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Logout = (props: SvgProps) => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <Rect width={30} height={30} fill="url(#pattern0_360_328)" />
    <Defs>
      <Pattern
        id="pattern0_360_328"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_360_328" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_360_328"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVR4nO2dy05UQRCGS5SXAHfGSyAkRmP0FdRoQnwhbw/ideOGAWOCs9GnEHRv4kaBIVHBZD7TodkQpo8zOHRVdX3JJBMWk6r/Y7oP5zTdIkEQBEEQBEEQBP8BYBZ4ALwCNoBd7LGba3+Ze5kVCwD3gS/44zNwT7QCnAGeAkP8MgSepF5FGzn8VngkCocdz7/5R0m93hFFE67HMb+LTRUTc75CaJVlDQJe0y4vNAhIX8USK8CcGAOYA3odvW1oKHTQUaS58A8B5jt6G0htOgpEjIP2/tQX6L0/9QWeEGC70N6W1KYBAauF9lZq19eCgIURd3PTxcdC7frcC0gAS8B7YC+/0vsl0UALAg4BzqaXaKIlASoJAZUJAZUJAZUJAZUJAZXxJACND9tbEABcBdaBX/kPrbfAFbGAdQEchH/crYYt4KZox4GA9UL52+olWBYAzORhB7MSLAtIAD+7elAtwYGA3j8I0CvBgYALecK1KcG6gARwDfg+hoRbogUPAkxL8CLArARPAkxK8CbAnIRpCAAWgTVgBxvUuzrqqmzCFQi72CNdyl6aTsrlwIpM8Hl97PJmOimXAysywbKPfezybXpJjw6tSGMCvk4v6dGhFZng8/rYxfYQlIhJeEy6qjrBgtjeGDfJauPnMlQDwHXgh/rwPQrAUvjeBGAtfE8CsBi+FwFYDd+DAOByPJKsCPDObPjWBXBw62PPbPgOBJwD/pgN37qABPDRbPhOBNwYsTwxFueesoQPeTj6nR+HXhQLeBBwZFKeEUt4EmCSEFCZEFCZEFCZEFCZEFCZlgQQ29XUIa/U6Oc1S/v5fWzYdBrkhcLHLZNJP1vUUKB3AWuF9nq162tBwE6hvdi2UlrvT32B3vtzvnn3+Y7edixsX5/WeM6LzZ3TVy1sX5/O2WqVZ7XzjyNMlKws+ER7bKbeRQPphLkGj7G6LZrIJ8y1wkNRepThY+ffhGE6RU/17orA3XwKqTc21A07HRPzcjpnK0/QFv/pbpBrf5570THhBkEQBEEQBEEg1vkL+YkC8e00YcEAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default Logout;
