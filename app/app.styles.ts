import { css } from "styled-system/css";

export const body_styles = css({
  color: "black",
  width: "full",
  height: "full",
  backgroundColor: "white",
  _dark: {
    color: "white",
    backgroundColor: "gray.900",
  },
});

export const main_styles = css({
  fontSize: "sm",
  display: "flex",
  flexDirection: "column",
  width: "full",
  height: "100vh",
});
