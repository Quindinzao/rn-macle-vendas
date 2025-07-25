import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from 'react-native-svg';
const ShoppingCartActive = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Rect width={32} height={32} fill="url(#pattern0_273_220)" />
    <Defs>
      <Pattern
        id="pattern0_273_220"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_273_220" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_273_220"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEi0lEQVR4nO2dyYtkRRDGU0dHL6IHwYMIelBwB/0HRFQEr24XcbmIMvoPqER2jYIiCm6HOYij4OVhd+TrFmE8OAjqjKdWwQWvXhSUWdpxG8dPYrpfMTZ25avXnQsv4gdxaZrKqIzM/DK/V5XlnGEYhmEYhmEYKpm0uJYClj3jmA/ANBgnPONrz1ikJdz7ygc4r3Suo2PCuN4HrP2n47cIYvy40OKe0jmPCmJ82KfzN8VbTYNdpXMfBRTw14ACyPL0pgPOKp2/3gJYoOeyfXxDQ6/aySXIIszdB79MVnDltkTYAtvqAwp4b6tl6BpiBB9wxDoZKQfakfn0gXERMV63omBHCkABR9287NuHcyngZysCdqIAn7kh+IAVKwB2ogCvDisA4xkrALa/DLV4cFABaAl3RF78J6ecpsGu097ZrBmwiOsGvbiIsQ84NfPFGZc7xUzWt/NbD1LGCTqIcwY3QIzvIg3c5xTjAx5OIsDTBhhvRwrwklMMRbbrgwX4jAYejyxBnzjFeMahJALcMWHcHJkBv8uZwSmkSSnAmw5kv81sZBk3OYVQixuSCnCHD/h0ZkNLeMwpxKcW4A5ivBzRgf1OIZRagKcNBdwfmWrfOoX41ALcsbfFFZEZ8I8c2pwimhwCfCbyyYjIdLvNKYJyCfAczuhTThE+lwB3UMDTkQaXnSIolwB3LLS4PTIDVDmjPpcAdzzf4EJzRgsJcIdsNyPCo8IZpdwCPG2YsT/SsApn1OcW4A5zRgsJcIc5o+sQ43BWAe4wZ9Q5Wduj7nAKAe7Q7oxSKQGeJqDcGaWAR4oIcIdsNTU7oz7gjSIC3NcZlcPamJ1RiggwMR7KkYRKZ3Qv4zIK+LuYAHec/malMme0Wbcf2sjAO5pUgDU6oy8EXECMW4jxUWTQyfLTZEmqhzOqMijg7iwF6OOMagsK+IYIZ7tcRJ1RRUHyTLzFnS4nUWdUV7zociOWQwVvHBXEu0VuD4g6o2MPxkkfQFnX/Xmd0RHHARmArjTy0fQKOgMpgxh/+IAfPONjGfGTRdzoaiHmjMrtKqVzHDUxZ1T2xqVzHDXyBb3I9FX3mdHsaHVGqyHmjIpxVzrHUSPW80whZnxZOsdRQy1ujW7nGI+WznO0UIPd8iAiUoCT8qxU7ifS+o3KpFDAO6UPTD51yN2qjFYGkauNyRKujj0rHVGsyf0QrjaU3bB1wNUGHcT5FPBFBZ2DDPFnlRfYPtfiEgr4qoIOQsqQO1erLIBAy7iYGO+X7iSvbQnajGc8QIzvRzf6GcerFOH/Q54WLQTc5RmviT5s+EanSnfiwJC7VVl2fKX71TAMwzAGIb9HQwFPyufsifHrRhz2jCdK/FZNbfkk5dkVXBo5La/K/2jNJ8dI62NVrOYYebXlkxyZ5r0POy32aMsnOT7g896HHsYhbfkkZ86fS1nTlo+r6g0zjmnLx2mb8r6yfJIj++qaRM9Xlk9yZCsnW7o+2z5qsFtbPlmQQ03kTa/mPojVlE++zxG12LNx6Z0I4ZpccCF/KzHSasvHMAzDMAzDMAw3Wv4FKbIgrrKJNKUAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default ShoppingCartActive;
