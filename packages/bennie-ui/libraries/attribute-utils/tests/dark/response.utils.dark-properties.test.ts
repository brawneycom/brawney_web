import { describe, test, expect } from "bun:test";
import { ColorValue, ColorWeight } from "@bennie-ui/types/attributes";
import { getClassByViewPort } from "../../src/attributes.classes.utils";
import { ComponentProperties } from "@bennie-ui/types";

// TODO: this test needs more work
describe("dark properties", () => {
  describe(":dark:color", () => {
    test(`:dark:text-\${$color-value} default weight`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "cyan";
      const properties: ComponentProperties = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `text-${color}-500 dark:text-${dark_color}-500`,
      );
    });

    test(`:dark:text-\${$color-value} plus weight `, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "cyan";
      const weight: ColorWeight = "200";
      const properties: ComponentProperties = {
        colors: {
          text: { color, weight },
        },
        dark: {
          colors: { text: { color: dark_color } },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `text-${color}-200 dark:text-${dark_color}-500`,
      );
    });

    test(`:dark:bg-\${$color-value} default weight`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "cyan";
      const properties: ComponentProperties = {
        colors: {
          background: { color },
        },
        dark: {
          colors: {
            background: { color: dark_color },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(`bg-${color}-500 dark:bg-${dark_color}-500`);
    });

    test(`:dark:bg-\${$color-value} plus weight `, () => {
      const color: ColorValue = "blue";
      const weight: ColorWeight = "200";
      const dark_color: ColorValue = "cyan";
      const properties: ComponentProperties = {
        colors: {
          background: { color, weight },
        },
        dark: {
          colors: {
            background: { color: dark_color },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(`bg-${color}-200 dark:bg-${dark_color}-500`);
    });
  });
});
