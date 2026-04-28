import { ReactNode, SyntheticEvent } from "react";
import {
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
  TargetType,
} from "@bennie-ui/types/attributes";

import { DarkOverrides, ResponsiveOverrides } from "@bennie-ui/types/utilities";

import {
  TextSizeType,
  TextAlignmentType,
  TextDisplayType,
  TextOverflowType,
  TextTagType,
  TextWeightType,
} from "@bennie-ui/types/texts";

export interface LinkAttributes {
  target?: string;
  rel?: string;
  href?: string;
}

export interface LinkProperties {
  id?: string;
  align?: TextAlignmentType;
  children?: ReactNode;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  display?: TextDisplayType;
  href?: string;
  margin?: AllMargins;
  opacity?: OpacityType;
  overrides?: ResponsiveOverrides;
  overflow?: TextOverflowType;
  padding?: AllPaddings;
  size?: TextSizeType;
  tag?: TextTagType;
  target?: TargetType;
  weight?: TextWeightType;

  onClick?: (event: SyntheticEvent) => void;
}
