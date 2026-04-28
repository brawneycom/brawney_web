import { FC } from "react";
import { getComponentProperties } from "@bennie-ui/attribute-utils";
import { SectionProperties } from "./section.types";

export const Section: FC<SectionProperties> = (properties) => {
  const TagType = properties.tag || "div";
  return (
    <TagType {...getComponentProperties(properties)}>
      {properties.children}
    </TagType>
  );
};
