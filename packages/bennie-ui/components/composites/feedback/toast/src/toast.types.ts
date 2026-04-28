import React, { FC, ReactNode, SyntheticEvent } from "react";
import { Section } from "@bennie-ui/section";
import type {
  ScaleType,
  RoundingType,
  ActionType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
  AllPositions,
} from "@bennie-ui/types/attributes";

export type ToastProps = {
  action?: ActionType;
  scale?: ScaleType;

  dismissable?: boolean;
  duration?: number;
  children: ReactNode;
  onClick?: (event: SyntheticEvent) => void;
};
