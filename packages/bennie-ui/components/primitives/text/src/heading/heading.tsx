import { FC } from "react";
import { getTagSize, getTagWeight } from "./heading.utils";
import { HeadingProperties } from "./heading.types";

import {
  getClassNames,
  getComponentProperties,
} from "@bennie-ui/attribute-utils";

export const Heading: FC<HeadingProperties> = (properties) => {
  const TagType = properties?.tag || "h1";
  const className = getClassNames(
    getTagSize(TagType),
    getTagWeight(TagType),
    properties.className || "",
  );
  const props = getComponentProperties({ ...properties, className });
  // @ts-expect-error:
  return <TagType {...props}>{properties.children}</TagType>;
};

Heading.displayName = "Text";
