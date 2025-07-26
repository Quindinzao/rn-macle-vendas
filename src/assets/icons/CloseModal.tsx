import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const CloseModal = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Rect width={32} height={32} fill="url(#pattern0_36_543)" />
    <Defs>
      <Pattern
        id="pattern0_36_543"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_36_543" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_36_543"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC00lEQVR4nO2dzW4TMRRGTdoV8s19CERBrIKdqOz6FH3JrhAVKhsUHiCx0wfpj4SgKSANmokilSqlmTYz177+jtRdpdjnjJ12MoqNAQAAAAAAAAAAAMiF6oUpmaPpvjHVoPfXfTmJI+vDF3Lxhny4tT6cWj97awrBjsI76+MZufinnj/58JXd3Pcp/zv5WN39sT5ckV8cGuWQXxyu5np//vFHLxGaK//ei98ZxLXmCNTIr+e4ef71Suh4CNVgte08NAC9EehR+U2AW3N8stftQFz8+f9B6ItAW8lvAiy7H4yLHx8fiJ4ItLX8WNVuOh/Q0M9ebXoT0hiBWsivndRuehkY+3NnXbjYOoKbfTCZwW7urQ+XyV5omiNw6vI1R+Bc5GuMwLnJ1xSBc5WvIQLnLj/nCKxFfo4RWJv8nCKwVvk5RGDt8lOOwKXITzEClyY/pQhcqvwUInDp8iUjMOTLRWDIl4vAkC8XgSFfLgJDvlwEhny5CAz5chEY8uUiMORLPosTr9v8rtr/cCVXAkF+2hEsrny5CBby5VaChXy5CBbydwu3+FOzzW0L0IF8REhAPmElyMsnRJCXT4jQHsKtCDn4CTfWUnjkRQX8jLuaiCAofw0iPBHe4f18RBCUvwYRtqTLT7IYb8xy8tcgwgP0+RkuYyXIyV+DCGsRgk8vcOkrIYVHR7jUCCnILzZCSvKLi5Ci/GIipCxffYQc5KuNkJN8dRFylK8mQs7ys4+gQX62ETTJzy6CRvnZRNAsP/kIND5/g68ujhsihCuaLA46D2Bd/Kz5yn/m90efmk45PtlbHdlRhvz221FYdnt+wNF0n1z8XZL8lhF+9XGAw7fS5G+9HbkwNV0zHIfJpmNMSj/Eh1y8Gb6fj3sZxCpCmK62o7C0PnyiUXhtCoEmi4P6Dbeee+PAhWlv8v+h2e8EDjJLhmrQ+Z4PAAAAAAAAAAAAYHbGX4Vo2PC7tO+EAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default CloseModal;
