import { ComponentProperties } from "@bennie-ui/types";

export const TextAlignAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.align) {
    return `text-${properties.align}`;
  }
  return "";
};

export const TextSizeAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.size) {
    return `text-${properties.size}`;
  }
  return "";
};

export const TextWeightAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.weight) {
    return `font-${properties.weight}`;
  }
  return "";
};

export const TextWrapAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  if (properties.wrap) {
    return `text-${properties.wrap}`;
  }
  return "";
};
