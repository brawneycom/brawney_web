import { FC } from "react";
import {
  getClassNames,
  getComponentProperties,
  getActionColorAttribute,
} from "@bennie-ui/attribute-utils";
import { ButtonAttributes, ButtonProperties } from "./button.types";
import { getButtonScale, getButtonClassNames } from "./button.utils";

export const Button: FC<ButtonProperties> = (properties) => {
  const className = getClassNames(
    "button",
    getButtonScale(properties),
    getActionColorAttribute(properties),
    (properties.full_width ?? false) ? "w-full" : "",
    getButtonClassNames(properties),
  );

  const attributes: ButtonAttributes = {};

  if (properties.disabled ?? false) {
    attributes.disabled = true;
  }

  return (
    <button
      {...attributes}
      {...getComponentProperties({ ...properties, className })}
    >
      {properties.children}
    </button>
  );
};
