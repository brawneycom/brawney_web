import {
  FC,
  ChangeEvent,
  ReactNode,
  SyntheticEvent,
  useState,
  useEffect,
} from "react";
import type {
  ScaleType,
  RoundingType,
  ActionType,
  ColorType,
  OpacityType,
  AllMargins,
  AllPaddings,
  BorderTypes,
} from "@bennie-ui/types/attributes";
import { Section } from "@bennie-ui/section";
import { TextSizeType } from "@bennie-ui/types/texts";

import { getComponentProperties } from "@bennie-ui/attribute-utils";
import { DarkOverrides, ResponsiveOverrides } from "@bennie-ui/types/utilities";
import { Radio } from "./radio";
import { InputOption } from "../input.types";

type RadioGroupProps = {
  id?: string;
  border?: BorderTypes;
  colors?: ColorType;
  className?: string;
  dataTestId?: string;
  dark?: DarkOverrides;
  disabled?: boolean;
  display?: "row" | "col";

  margin?: AllMargins;
  size?: TextSizeType;
  opacity?: OpacityType;

  options: InputOption[];
  overrides?: ResponsiveOverrides;
  padding?: AllPaddings;

  rounding?: RoundingType;

  onClick?: (event: SyntheticEvent) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroup: FC<RadioGroupProps> = (properties) => {
  const display = properties.display || "col";
  return (
    <Section
      flex={{ direction: display, justifyContent: "around" }}
      {...getComponentProperties({
        ...properties,
      })}
    >
      {properties.options.map((it) => {
        return (
          <Radio
            key={it.label}
            item={it}
            onChange={properties.onChange}
            disabled={properties.disabled}
          />
        );
      })}
    </Section>
  );
};
