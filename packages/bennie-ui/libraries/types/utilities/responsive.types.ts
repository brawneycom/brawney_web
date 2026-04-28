import { ReactNode } from "react";
import { DarkOverrides } from "../utilities/dark.types";
import { TextSizeType, TextAlignmentType } from "../texts";
import { AllWidths } from "../attributes/width.types";
import { AllHeights } from "../attributes/height.types";
import { AllMargins } from "../attributes/margin.types";
import { AllPaddings } from "../attributes/padding.types";
import { OpacityType, FlexType, ColorType, RoundingType, GridType } from "../attributes";

export type AllResponsiveBreakpoints = "sm" | "md" | "lg" | "xl" | "2xl";

interface ResponsiveOverrideProperties {
  align?: TextAlignmentType;
  children?: ReactNode;
  colors?: ColorType;
  dark?: DarkOverrides;
  flex?: FlexType;
  grid?: GridType;
  height?: AllHeights;
  margin?: AllMargins;
  opacity?: OpacityType;
  padding?: AllPaddings;
  rounding?: RoundingType;
  size?: TextSizeType;
  width?: AllWidths;
}

export interface ResponsiveOverrides {
  medium?: ResponsiveOverrideProperties;
  large?: ResponsiveOverrideProperties;
}
