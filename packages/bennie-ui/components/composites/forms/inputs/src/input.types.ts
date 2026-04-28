import { ChangeEvent, ReactNode, SyntheticEvent } from "react";
import type {
  ScaleType,
  RoundingType,
  ActionType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
} from "@bennie-ui/types/attributes";

import { DATA_TEST_ID } from "@bennie-ui/constants";
import { TextSizeType } from "@bennie-ui/types/texts";
import { DarkOverrides, ResponsiveOverrides } from "@bennie-ui/types/utilities";

export interface InputAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  onClick?: (event: SyntheticEvent) => void;
  disabled?: boolean;
}

export type InputProperties = {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
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

  action?: ActionType;
  scale?: ScaleType;
  rounding?: RoundingType;

  full_width?: boolean;
  withClearMark?: boolean;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type InputOption = {
  name: string;
  label?: string;
  value: string;
  selected: boolean;
};
