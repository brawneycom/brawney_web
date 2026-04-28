export type TextSizeType =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";
export type TextDisplayType = "inline" | "block" | "inline-block";
export type TextWeightType =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold";
export type TextOverflowType = "none" | "truncate";
export type TextAlignmentType =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "start"
  | "end";
export type TextTagType =
  | "span"
  | "div"
  | "p"
  | "b"
  | "em"
  | "s"
  | "small"
  | "i"
  | "mark"
  | "pre"
  | "strong"
  | "q"
  | "sub"
  | "sup";
export type HeadingTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
export type TextWrapType = "wrap" | "nowrap" | "balance" | "pretty";

export type TextTypes = {
  size?: TextSizeType;
  weight?: TextWeightType;
  align?: TextAlignmentType;
  display?: TextDisplayType;
  wrap?: TextWrapType;
};
