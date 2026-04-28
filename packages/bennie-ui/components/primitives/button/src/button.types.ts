import { ReactNode, SyntheticEvent } from "react";
import type {
  ScaleType,
  RoundingType,
  ActionType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
  AllPositions,
  BorderTypes,
} from "@bennie-ui/types/attributes";

import { DATA_TEST_ID } from "@bennie-ui/constants";
import { TextSizeType } from "@bennie-ui/types/texts";
import { DarkOverrides, ResponsiveOverrides } from "@bennie-ui/types/utilities";

export interface ButtonAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  onClick?: (event: SyntheticEvent) => void;
  disabled?: boolean;
}

export interface ButtonProperties {
  id?: string;

  border?: BorderTypes;
  children?: ReactNode;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  disabled?: boolean;
  margin?: AllMargins;
  size?: TextSizeType;
  opacity?: OpacityType;
  overrides?: ResponsiveOverrides;
  padding?: AllPaddings;
  position?: AllPositions;
  action?: ActionType;
  scale?: ScaleType;
  rounding?: RoundingType;
  full_width?: boolean;

  onClick?: (event: SyntheticEvent) => void;
}
