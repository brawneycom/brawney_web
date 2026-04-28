import { ChangeEvent, FC, useState } from "react";
import { Icon } from "@bennie-ui/icons";
import { Button } from "@bennie-ui/button";
import { Section } from "@bennie-ui/section";
import { InputAttributes, InputProperties } from "./input.types";
import { getComponentProperties } from "@bennie-ui/attribute-utils";

export const Input: FC<InputProperties> = (properties: InputProperties) => {
  const { label, name, withClearMark, placeholder } = properties;
  const attributes: InputAttributes = {};
  const [state, setState] = useState<string>(properties.value);

  if (properties.disabled ?? false) {
    attributes.disabled = true;
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
    properties.onChange && properties.onChange(event);
  };

  return (
    <Section
      position={{ style: "relative" }}
      colors={{ text: { color: "black" } }}
    >
      {label && (
        <Section
          size="xs"
          colors={{ text: { color: "white" } }}
          margin={{ bottom: "2" }}
        >
          {label}
        </Section>
      )}
      <input
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        {...attributes}
        {...getComponentProperties({
          ...properties,
          className: "w-full rounded-md",
        })}
        value={state}
      />
      {state != "" && withClearMark && (
        <Button
          padding={{ all: "0" }}
          position={{ style: "absolute", right: "2", top: "8" }}
          onClick={() => {
            setState("");
          }}
        >
          <Icon figure="XMarkIcon" colors={{ text: { color: "black" } }} />
        </Button>
      )}
    </Section>
  );
};
