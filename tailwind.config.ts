import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        chooseHero:
          "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/heroes_full.jpg')",
        dpcHero:
          'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg")',
        playHero:
          'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/background4.png")',
        patchesPage:
          "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/featured.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
