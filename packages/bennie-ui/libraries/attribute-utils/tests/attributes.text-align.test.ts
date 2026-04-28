import { test, expect } from "bun:test";
import { ComponentProperties } from "@bennie-ui/types";
import { TextAlignmentType } from "@bennie-ui/types/texts";
import { getClassByViewPort } from "@bennie-ui/attribute-utils";
import { variants } from "@bennie-ui/baseline/tailwind/attributes/align";
import { resolutions } from "./utils";

resolutions.forEach((resolution) => {
  variants.base.forEach((align) => {
    test(`attributes.props.text-align:${align}`, () => {
      const align_value = align.split("-")[1];
      const properties: ComponentProperties =
        resolution.name === "base"
          ? { align: align_value as TextAlignmentType }
          : {
              overrides: {
                [resolution.name]: { align: align_value as TextAlignmentType },
              },
            };

      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        resolution.name === "base" ? align : `${resolution.value}:${align}`,
      );
    });
  });
});
