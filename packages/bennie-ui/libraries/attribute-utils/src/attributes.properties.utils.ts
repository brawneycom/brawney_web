import { getClassByViewPort } from "./attributes.classes.utils";
import { ComponentAttributes, ComponentProperties } from "@bennie-ui/types";
import { DATA_TEST_ID } from "@bennie-ui/types/constants";

export const getComponentProperties = (properties: ComponentProperties) => {
  const attributes: ComponentAttributes = {};
  const default_class_name = properties.className || "";

  const className = default_class_name + getClassByViewPort(properties);

  {
    if (properties.onClick) {
      attributes.onClick = properties.onClick;
    }

    if (properties.id !== "") {
      attributes.id = properties.id;
    }

    if (className !== "") {
      attributes.className = className.trim();
    }

    if (properties.dataTestId !== "") {
      // @ts-ignore
      attributes[DATA_TEST_ID] = properties.dataTestId;
    }
  }

  return attributes;
};
