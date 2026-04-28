import { NumericType, ColorPropertiesType } from "@bennie-ui/types/attributes";
import { IconFigure } from "./icon-figure.type";
export type IconType = "solid" | "outline";

export type BasicIconProps = {
  className: string;
  figure: IconFigure;
  onClick?: () => void | undefined;
};

export type IconProperties = {
  height?: NumericType;
  width?: NumericType;
  colors?: {
    text: ColorPropertiesType;
  };
};

export type IconProps = IconProperties & {
  figure: IconFigure;
  type?: IconType;
  dark?: IconProperties;
  overrides?: {
    medium?: IconProperties;
    large?: IconProperties;
  };
  onClick?: () => void | undefined;
};
