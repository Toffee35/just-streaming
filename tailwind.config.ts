import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.tsx",
    "./src/shared/**/*.tsx",
    "./src/modules/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "gsc-yoru": "#0f0f0f",
        "gsc-kesseki": "#191919",
        "gsc-iwa": "#262626",
        "gsc-tetsu": "#393939",
        "gsc-amagumo": "#4c4c4c",
        "gsc-gin": "#767676",
        "gsc-okami": "#a0a0a0",
        "gsc-tsuki": "#bfbfbf",
        "gsc-fuyu": "#cacaca",

        "alp-ume": "#8f8aac",
        "alp-kosumosu": "#ac8aac",
        "alp-chikyu": "#aca98a",
        "alp-kaen": "#ac8a8c",
        "alp-aki": "#c6a679",
        "alp-mizu": "#8aacab",
        "alp-take": "#8aac8b",
        "alp-shinkai": "#8a98ac",
        "alp-iwa": "#262626",
        "alp-usagi": "#e7e7e7",

        "acc-ajisai": "#a39ec4",
        "acc-sakura": "#c49ec4",
        "acc-suna": "#c4c19e",
        "acc-ichigo": "#c49ea0",
        "acc-yuyake": "#ceb188",
        "acc-sora": "#9ec3c4",
        "acc-kusa": "#9ec49f",
        "acc-kori": "#a5b4cb",
        "acc-amagumo": "#4c4c4c",
        "acc-yuki": "#f0f0f0",
      },
    },
  },
  plugins: [],
} satisfies Config;
