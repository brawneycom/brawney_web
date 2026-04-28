import { ComponentProperties } from "@bennie-ui/types";

export const HeightAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  let classes = "";
  if (properties.height) {
    if (properties.height.max) {
      classes += `max-h-${properties.height.max}`;
    }
    if (properties.height.min) {
      classes += `min-h-${properties.height.min}`;
    }
    if (properties.height.value) {
      classes += `h-${properties.height.value}`;
    }
  }
  return classes;
};
