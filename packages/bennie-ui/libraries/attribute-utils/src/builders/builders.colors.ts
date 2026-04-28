import {
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getBorderColorAttribute,
} from "../attributes.color.utils";
import { ComponentProperties, BuilderFunction } from "@bennie-ui/types";

export const ColorBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.colors?.text) {
    classes += " " + TextColorBuilder(properties);
  }

  if (properties.colors?.background) {
    classes += " " + BackgroundColorBuilder(properties);
  }

  if (properties.colors?.border) {
    classes += " " + BorderColorBuilder(properties);
  }

  return classes;
};
export const TextColorBuilder: BuilderFunction = (
  properties: ComponentProperties,
): string => {
  if (properties.action != null) {
    return "";
  }

  const text_color_classes = properties.className?.split(" ").filter((it) => {
    if (
      it.includes("text-") &&
      !it.includes("xs") &&
      !it.includes("sm") &&
      !it.includes("base") &&
      !it.includes("xl")
    ) {
      return true;
    }
    return false;
  });

  if (text_color_classes && text_color_classes?.length > 0) {
    return "";
  }

  if (properties.colors?.text) {
    return getTextColorAttribute(properties.colors?.text);
  }

  return " ";
};

export const BackgroundColorBuilder: BuilderFunction = (
  properties: ComponentProperties,
): string => {
  if (properties.action != null) {
    return "";
  }

  if (
    properties.className?.indexOf &&
    properties.className?.indexOf("bg-") > -1
  ) {
    return "";
  }

  if (properties.colors?.background) {
    return getBackgroundColorAttribute(properties.colors?.background);
  }

  return " ";
};

export const BorderColorBuilder: BuilderFunction = (
  properties: ComponentProperties,
): string => {
  if (properties.colors?.border) {
    return getBorderColorAttribute(properties.colors?.border);
  }

  return " ";
};
