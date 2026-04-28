import { ComponentProperties } from "@bennie-ui/types";
import { getPrefix } from "./builders.utils";

export const PaddingAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  let classes = "";

  if (properties.padding) {
    const entries = Object.entries(properties.padding);

    entries.forEach(([property_name, property_value]) => {
      const is_auto = property_value.includes("auto");
      const prefix = getPrefix("p", property_name);

      classes += is_auto
        ? `p-${property_value}`
        : ` ${prefix}-${property_value}`;
    });
  }
  return classes;
};
