import { ComponentProperties } from "@bennie-ui/types";
import { getPrefix } from "./builders.utils";

export const MarginAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  let classes = "";

  if (properties.margin) {
    const entries = Object.entries(properties.margin);

    entries.forEach(([property_name, property_value]) => {
      const is_auto = property_value.includes("-");
      const prefix = getPrefix("m", property_name);

      classes += is_auto ? `${property_value}` : ` ${prefix}-${property_value}`;
    });
  }
  return classes;
};
