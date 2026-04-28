import { ComponentProperties } from "@bennie-ui/types";

export const RoundingAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  let classes = ""
  if (properties.rounding) {
    if(properties.rounding.all) {
     classes += `rounded-${properties.rounding.all}`;
    }
  }
  return classes;
};
