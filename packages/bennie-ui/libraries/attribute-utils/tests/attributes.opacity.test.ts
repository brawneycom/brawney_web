import { describe, test, expect } from "bun:test";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@bennie-ui/baseline/tailwind/attributes/opacity";
import { OpacityType } from "@bennie-ui/types/attributes";
import { ComponentProperties } from "@bennie-ui/types";

describe("attributes.opacity", () => {
  variants.base.forEach((opacity) => {
    test(`:${opacity}`, () => {
      const opacity_value = opacity.split("-")[1];
      const properties: ComponentProperties = {
        opacity: opacity_value as OpacityType,
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(opacity);
    });
  });
});
