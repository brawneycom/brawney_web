import { SyntheticEvent } from "react";
import {
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
  AllPositions,
} from "@bennie-ui/types/attributes";

import { DarkOverrides, ResponsiveOverrides } from "@bennie-ui/types/utilities";

import {
  TextSizeType,
  TextAlignmentType,
  TextDisplayType,
  TextOverflowType,
  TextTagType,
  TextWeightType,
  TextWrapType,
} from "@bennie-ui/types/texts";

export type TextAttributes = {
  id?: string;
  dataTestId?: string;
  className?: string;
  onClick?: (event: SyntheticEvent) => void;
};

export type TextProperties = {
  id?: string;

  align?: TextAlignmentType;
  children?: React.ReactNode;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  display?: TextDisplayType;

  margin?: AllMargins;
  size?: TextSizeType;
  opacity?: OpacityType;
  overrides?: ResponsiveOverrides;
  overflow?: TextOverflowType;
  padding?: AllPaddings;

  position?: AllPositions;

  tag?: TextTagType;
  weight?: TextWeightType;
  wrap?: TextWrapType;
};
