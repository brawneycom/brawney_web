import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@bennie-ui/baseline/tailwind/attributes/rounding";
import { RoundingType } from "@bennie-ui/types/attributes";
import { ComponentProperties } from "@bennie-ui/types";

describe("attributes.rounding", () => {
  variants.base.forEach((rounding) => {
    // TODO: fix rounding
    test.skip(`:${rounding}`, () => {
      const rounding_value = rounding.split("-")[1];
      const properties: ComponentProperties = {
        rounding: rounding_value as RoundingType,
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(rounding);
    });
  });
});
