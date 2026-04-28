import React, { FC, ChangeEvent, useState, useEffect } from "react";

import { Text } from "@bennie-ui/text";
import { Section } from "@bennie-ui/section";
import { InputOption } from "../input.types";
import { DATA_TEST_ID } from "@bennie-ui/constants";

export interface RadioGroupAttributes {
  className?: string;
  id?: string;
  [DATA_TEST_ID]?: string;
  disabled?: boolean;
}

type RadioProperties = {
  item: InputOption;
  disabled?: boolean;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Radio: FC<RadioProperties> = (properties) => {
  const attributes: RadioGroupAttributes = {};

  const { item, onChange } = properties;

  const handleOnChange = () => {
    // @ts-ignore
    onChange({ target: { name: item.name, value: item.value } });
  };

  if (properties.disabled) {
    attributes.disabled = true;
  }

  return (
    <Section
      key={item.name}
      flex={{ direction: "row", alignItems: "center" }}
      onClick={handleOnChange}
    >
      <input
        type="radio"
        {...attributes}
        className="w-5 h-5"
        name={item.name}
        checked={item.selected}
        onChange={handleOnChange}
      />
      <Text margin={{ left: "2" }}>{item.label}</Text>
    </Section>
  );
};
