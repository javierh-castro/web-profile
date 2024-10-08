import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx},\\r\\n    ./components/**/*.{js,ts,jsx,tsx,mdx},\\r\\n    ./app/**/*.{js,ts,jsx,tsx,mdx},\\r\\n    \\r\\n    // Or if using src directory:\\r\\n    ./src/**/*.{js,ts,jsx,tsx,mdx},",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|navbar|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
