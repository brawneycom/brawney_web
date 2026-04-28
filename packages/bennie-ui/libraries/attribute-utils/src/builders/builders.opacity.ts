import { ComponentProperties } from "@bennie-ui/types";

export const OpacityAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.opacity) {
    return `opacity-${properties.opacity}`;
  }
  return "";
};
