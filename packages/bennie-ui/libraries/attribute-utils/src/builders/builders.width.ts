import { ComponentProperties } from "@bennie-ui/types";

export const WidthAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.width) {
    return `w-${properties.width.value}`;
  }
  return "";
};
