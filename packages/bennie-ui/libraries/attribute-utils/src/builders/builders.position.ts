import { ComponentProperties } from "@bennie-ui/types";

export const PositionAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  let classes = "";

  if (properties.position) {
    classes += ` ${properties.position.style || "relative"}`;

    if(properties.position.index) {
      classes += ` z-${properties.position.index || '0'}`
    }

    const entries = Object.entries(properties.position);

    entries.forEach(([property_name, property_value]) => {
      if (property_name !== "style" && property_name !== 'index') {
        const is_auto =
          property_name.includes("x") || property_name.includes("y");

        if (property_name.includes("all")) {
          classes += ` inset-${property_value}`;
        } else {
          classes += is_auto
            ? ` inset-${property_name}-${property_value}`
            : ` ${property_name}-${property_value}`;
        }
      }
    });
  }
  return classes;
};
