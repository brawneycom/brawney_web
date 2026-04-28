import { ColorValue } from "@bennie-ui/types/attributes";
const text_color: ColorValue = "blue";
const bg_color: ColorValue = "amber";
const dark_text_color: ColorValue = "cyan";
const dark_bg_color: ColorValue = "emerald";

const md_text_color: ColorValue = "fuchsia";
const md_bg_color: ColorValue = "gray";
const md_dark_text_color: ColorValue = "emerald";
const md_dark_bg_color: ColorValue = "orange";

const lg_text_color: ColorValue = "amber";
const lg_bg_color: ColorValue = "cyan";
const lg_dark_text_color: ColorValue = "green";
const lg_dark_bg_color: ColorValue = "emerald";

export const ColorStubs = {
  colors: {
    text: { color: text_color },
    background: { color: bg_color },
  },
  dark: {
    colors: {
      text: { color: dark_text_color },
      background: { color: dark_bg_color },
    },
  },
  overrides: {
    medium: {
      colors: {
        text: { color: md_text_color },
        background: { color: md_bg_color },
      },
      dark: {
        colors: {
          text: { color: md_dark_text_color },
          background: { color: md_dark_bg_color },
        },
      },
    },
    large: {
      colors: {
        text: { color: lg_text_color },
        background: { color: lg_bg_color },
      },
      dark: {
        colors: {
          text: { color: lg_dark_text_color },
          background: { color: lg_dark_bg_color },
        },
      },
    },
  },
};
