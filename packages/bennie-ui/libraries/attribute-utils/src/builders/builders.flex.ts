import { ComponentProperties, BuilderFunction } from "@bennie-ui/types";

export const FlexBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.flex) {
    classes += " flex";
    classes += FlexJustifyContentBuilder(properties);
    classes += FlexAlignItemsBuilder(properties);
    classes += FlexAlignSelfBuilder(properties);
    classes += FlexDirectionBuilder(properties);
    classes += FlexWrapBuilder(properties);
    classes += FlexGrowBuilder(properties);
    classes += FlexShrinkBuilder(properties);
  }

  return classes;
};

export const FlexJustifyContentBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.flex?.justifyContent) {
    classes += ` justify-${properties.flex.justifyContent}`;
  }

  return classes;
};

export const FlexAlignItemsBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.flex?.alignItems) {
    classes += ` items-${properties.flex.alignItems}`;
  }

  return classes;
};

export const FlexAlignSelfBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.flex?.alignSelf) {
    classes += ` self-${properties.flex.alignSelf}`;
  }

  return classes;
};

export const FlexWrapBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.flex?.wrap) {
    switch (properties.flex.wrap) {
      case "nowrap":
        classes += " flex-nowrap";
        break;

      case "reverse":
        classes += " flex-wrap-reverse";
        break;

      default:
        classes += " flex-wrap";
    }
  }

  return classes;
};

export const FlexDirectionBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.flex?.direction) {
    classes += ` flex-${properties.flex.direction}`;
  }
  return classes;
};

export const FlexGrowBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  const classes = "";

  if (properties.flex?.grow) {
    if (properties.flex.grow === "1") {
      return " grow";
    } else {
      return " grow-0";
    }
  }
  return classes;
};

export const FlexShrinkBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  const classes = "";

  if (properties.flex?.shrink) {
    if (properties.flex.shrink === "1") {
      return " shrink";
    } else {
      return " shrink-0";
    }
  }
  return classes;
};
