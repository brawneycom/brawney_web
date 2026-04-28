import { ComponentProperties, BuilderFunction } from "@bennie-ui/types";

export const BorderAttributeBuilder = (
  properties: ComponentProperties,
): string => {
  let classes = "";
  if (properties.border) {
    classes += BorderWidthBuilder(properties);
  }
  return classes;
};

export const BorderWidthBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.border?.width) {
    if (properties.border?.width?.all) {
      classes += `border${properties.border.width.all === "1" ? "" : `-${properties.border.width.all}`}`;
    }
    if (properties.border?.width?.x) {
      classes += `border-x${properties.border.width.x === "1" ? "" : `-${properties.border.width.x}`}`;
    }
    if (properties.border?.width?.y) {
      classes += `border-y${properties.border.width.y === "1" ? "" : `-${properties.border.width.y}`}`;
    }
    if (properties.border?.width?.s) {
      classes += `border-s${properties.border.width.s === "1" ? "" : `-${properties.border.width.s}`}`;
    }
    if (properties.border?.width?.e) {
      classes += `border-e${properties.border.width.e === "1" ? "" : `-${properties.border.width.e}`}`;
    }
    if (properties.border?.width?.t) {
      classes += `border-t${properties.border.width.t === "1" ? "" : `-${properties.border.width.t}`}`;
    }
    if (properties.border?.width?.r) {
      classes += `border-r${properties.border.width.r === "1" ? "" : `-${properties.border.width.r}`}`;
    }
    if (properties.border?.width?.b) {
      classes += `border-b${properties.border.width.b === "1" ? "" : `-${properties.border.width.b}`}`;
    }
    if (properties.border?.width?.l) {
      classes += `border-l${properties.border.width.l === "1" ? "" : `-${properties.border.width.l}`}`;
    }
  }

  return classes;
};
