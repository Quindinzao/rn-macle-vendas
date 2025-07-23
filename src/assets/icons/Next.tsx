import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Next = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect width={24} height={24} fill="url(#pattern0_147_14)" />
    <Defs>
      <Pattern
        id="pattern0_147_14"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_147_14" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_147_14"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABxUlEQVR4nO3dzWoTYRTG8fhxJ2J1KUqJu1xFzjznzMXkflyVFqG7ejOCmxpB8AMXymAWQZRm0cmDOf8fZP9y/oeZzdvOYgEAAAAAANDWA/cBWqqqF5KuJX3NzO+SrjLzuftcbYafmZ8z8+f+T9JW0tJ9vpMn6frP4e/9PhFhRpvN5uHusfOvAESYW2Z+uSMAEeYk6eKAAESYyzAMT6YXLhGMIuJlZt4eGmEcx9fO856kIIJfEMEviOAXRPALIvgFEfyCCH5BBL8ggl8QwS+I4BdE8Asi+AUR/IIIfkEEvyCCXxDBL4jgF0TwCyL4BRH8ggh+QQS/IIKfpOV0s+6QG3jTdclhGM7cZ+4e4Y37vN0fRx/cZz1JVfVK0scDArx3n/XkiEfQfzP8LS9hz2OHv8a5bwzfqNh8ht9SsfkMv6Vi8xl+S8XmM/yWis1n+C0Vm8/wWyo2n+G3VGw+w2+p2HyG31Kx+Qy/pWLzGX5LxeYz/JbGcXzGvy42kvSW64Im6/X60fTJEu5qmqxWq8eZ+YOLskaS3nFL2Sgizv/2GRM+4nPkCJl5s3scfZN0mZlPj3kGLH6/lKcP+zAMAAAAAACAxRx+AWufn9UhU8hXAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default Next;
