import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const Plus = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Rect width={16} height={16} fill="url(#pattern0_147_167)" />
    <Defs>
      <Pattern
        id="pattern0_147_167"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_147_167" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_147_167"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABw0lEQVR4nO3bQSsEYRzH8VmHtXkL3tNeScqKvAJ5GRy5OvIOnCVF4cBLEFe1aS98NZmypWW2md1nZ/7fTykXNc/z3V9KJsskSZIkTQtYBrpT/6CqAQbAAz/y77e81zkAjpnsxAizvfw1/rduhNkFuCwR4MoAswswLBHg3QCzC/BBOUtGMED74AIMEBouwACh4QIMEBouwACh4QIMEBouwACh4QIMEBouwACh4QIMEBouwACh4QIMEBouwACh4QIMEBouwAChEXUBxTtZt8Co5AVENCruaFDnxXeA09Qna6D8zjp1BNhNfZIG26sjwGPqUzTYU9XL703xS0+/fQIrVQJ0DVBJ/uHtVV3BXbVnCO2+0uUXATZSn6LBNisHKCIcpj5JAx3VcvljEfrABfCS+mQL7LW4o37WVkT9U8SiwAAGCA0XYIDQcAEGCA0XYIDQcAEGCA0XYIDQcAEGCA0XYIDQcAEGCA0XYIDQcAEGCA0XYIDQcAEGCA0XYIDQgLcS/5g7TP2crQVclwhwk/o5WwvYLhFgJ/VzthbfL46f/XH557W8IK3J8pcvgH3geezi8+8PfDFj/mtYLb781EuSJElZKV8u4c00Qh0CGwAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default Plus;
