import { ColorPropertiesType } from "@bennie-ui/types/attributes";
import { ComponentProperties } from "@bennie-ui/types";
import { ActionsMap } from "./attribute.action-map";

const get_class_matching = (className: string, query: string) => {
  const classes = className.split(" ");
  const found = classes.filter((it) => it.includes(query));
  if (found) {
    return [found];
  }
  return undefined;
};

export const getActionColorAttribute = (
  properties: ComponentProperties,
): string => {
  const { action, className } = properties;

  if (action === undefined) {
    return "";
  }

  let text_class,
    bg_class = undefined;
  if (className) {
    text_class = get_class_matching(className, "text-");
    bg_class = get_class_matching(className, "bg-");
  }

  const defaultAction = ActionsMap[action];

  const textAttribute = text_class
    ? text_class
    : getTextColorAttribute(defaultAction?.text as ColorPropertiesType);

  const backgroundAttribute = bg_class
    ? bg_class
    : getBackgroundColorAttribute(
        defaultAction?.background as ColorPropertiesType,
      );

  return `${textAttribute} ${backgroundAttribute} `;
};

export const getTextColorAttribute = (value: ColorPropertiesType): string => {
  const { color = "white", weight = "500" } = value;
  if (color === "white" || color === "black") return `text-${color}`;
  return `text-${color}-${weight}`;
};

export const getBackgroundColorAttribute = (
  value: ColorPropertiesType,
): string => {
  const { color = "slate", weight = "500" } = value;
  if (color === "white" || color === "black") return `bg-${color}`;
  return `bg-${color}-${weight}`;
};

export const getBorderColorAttribute = (value: ColorPropertiesType): string => {
  const { color = "slate", weight = "500" } = value;
  if (color === "white" || color === "black") return `border-${color}`;

  return `border-${color}-${weight}`;
};

export const getDarkClassName = (
  parentNames: string[],
  propertyName: string,
  className: string,
): string => {
  if (parentNames.includes("dark") || propertyName === "dark") {
    return `dark:${className}`;
  }
  return `${className}`;
};
