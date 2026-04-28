import { FC } from "react";
import { getComponentProperties } from "@bennie-ui/attribute-utils";
import { TextAttributes, TextProperties } from "./text.types.js";

const Text: FC<TextProperties> = (properties) => {
  const attributes: TextAttributes = {};

  const TagType = properties.tag || "span";

  if (properties.id !== "") {
    attributes.id = properties.id;
  }

  if (properties.dataTestId !== "") {
    attributes.dataTestId = properties.dataTestId;
  }

  return (
    <TagType {...getComponentProperties({ ...properties })}>
      {properties.children}
    </TagType>
  );
};

Text.displayName = "Text";

export { Text };
