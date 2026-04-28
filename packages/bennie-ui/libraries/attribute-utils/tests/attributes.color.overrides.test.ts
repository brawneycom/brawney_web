import { describe, test, expect } from "bun:test";
import { ColorValue } from "@bennie-ui/types/attributes";
import { ComponentProperties } from "@bennie-ui/types";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { ColorStubs } from "../stubs/colors.stubs";

describe("react-base-component.props.overrides:color", () => {
  describe(":TextColorType", () => {
    test(`text-color and md::dark:text-color`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "amber";
      const md_color: ColorValue = "cyan";
      const md_dark_color: ColorValue = "fuchsia";
      const properties: ComponentProperties = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
        overrides: {
          medium: {
            colors: { text: { color: md_color } },
            dark: {
              colors: { text: { color: md_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `text-${color}-500 dark:text-${dark_color}-500 md:text-${md_color}-500 md:dark:text-${md_dark_color}-500`,
      );
    });

    test(`concatenate text-color and md:dark:text-color`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "amber";
      const lg_color: ColorValue = "cyan";
      const lg_dark_color: ColorValue = "fuchsia";
      const properties: ComponentProperties = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
        overrides: {
          large: {
            colors: { text: { color: lg_color } },
            dark: {
              colors: { text: { color: lg_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `text-${color}-500 dark:text-${dark_color}-500 lg:text-${lg_color}-500 lg:dark:text-${lg_dark_color}-500`,
      );
    });

    test(`combine text-color and (md|lg):dark:text-color`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "amber";
      const md_color: ColorValue = "gray";
      const md_dark_color: ColorValue = "green";
      const lg_color: ColorValue = "cyan";
      const lg_dark_color: ColorValue = "fuchsia";
      const properties: ComponentProperties = {
        colors: { text: { color } },
        dark: {
          colors: { text: { color: dark_color } },
        },
        overrides: {
          medium: {
            colors: { text: { color: md_color } },
            dark: {
              colors: { text: { color: md_dark_color } },
            },
          },
          large: {
            colors: { text: { color: lg_color } },
            dark: {
              colors: { text: { color: lg_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `text-${color}-500 dark:text-${dark_color}-500 md:text-${md_color}-500 md:dark:text-${md_dark_color}-500 lg:text-${lg_color}-500 lg:dark:text-${lg_dark_color}-500`,
      );
    });
  });

  describe(":BackgroundColorType", () => {
    test(`concatenate bg-color and md::dark:bg-color`, () => {
      const color: ColorValue = "black";
      const dark_color: ColorValue = "cyan";
      const md_color: ColorValue = "amber";
      const md_dark_color: ColorValue = "green";
      const properties: ComponentProperties = {
        colors: { background: { color } },
        dark: {
          colors: { background: { color: dark_color } },
        },
        overrides: {
          medium: {
            colors: { background: { color: md_color } },
            dark: {
              colors: { background: { color: md_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `bg-${color} dark:bg-${dark_color}-500 md:bg-${md_color}-500 md:dark:bg-${md_dark_color}-500`,
      );
    });

    test(`concatenate bg-color and md:dark:bg-color`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "amber";
      const lg_color: ColorValue = "cyan";
      const lg_dark_color: ColorValue = "fuchsia";
      const properties: ComponentProperties = {
        colors: { background: { color } },
        dark: {
          colors: { background: { color: dark_color } },
        },
        overrides: {
          large: {
            colors: { background: { color: lg_color } },
            dark: {
              colors: { background: { color: lg_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `bg-${color}-500 dark:bg-${dark_color}-500 lg:bg-${lg_color}-500 lg:dark:bg-${lg_dark_color}-500`,
      );
    });

    test(`combine bg-color and (md|lg):dark:bg-color`, () => {
      const color: ColorValue = "blue";
      const dark_color: ColorValue = "amber";
      const md_color: ColorValue = "gray";
      const md_dark_color: ColorValue = "green";
      const lg_color: ColorValue = "cyan";
      const lg_dark_color: ColorValue = "fuchsia";
      const properties: ComponentProperties = {
        colors: { background: { color } },
        dark: {
          colors: { background: { color: dark_color } },
        },
        overrides: {
          medium: {
            colors: { background: { color: md_color } },
            dark: {
              colors: { background: { color: md_dark_color } },
            },
          },
          large: {
            colors: { background: { color: lg_color } },
            dark: {
              colors: { background: { color: lg_dark_color } },
            },
          },
        },
      };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe(
        `bg-${color}-500 dark:bg-${dark_color}-500 md:bg-${md_color}-500 md:dark:bg-${md_dark_color}-500 lg:bg-${lg_color}-500 lg:dark:bg-${lg_dark_color}-500`,
      );
    });
  });

  describe(":TextColorType and :BackgroundColorType", () => {
    test(`concatenate bg-color and md::dark:bg-color`, () => {
      const properties: ComponentProperties = ColorStubs;

      const result = getClassByViewPort(properties);
      expect(result).toContain(`text-${ColorStubs.colors.text.color}-500`);
      expect(result).toContain(`bg-${ColorStubs.colors.background.color}-500`);
      expect(result).toContain(
        `dark:text-${ColorStubs.dark.colors.text.color}-500`,
      );
      expect(result).toContain(
        `dark:text-${ColorStubs.dark.colors.text.color}-500`,
      );

      expect(result).toContain(
        `md:text-${ColorStubs.overrides.medium.colors.text.color}-500`,
      );
      expect(result).toContain(
        `md:bg-${ColorStubs.overrides.medium.colors.background.color}-500`,
      );
      expect(result).toContain(
        `md:dark:text-${ColorStubs.overrides.medium.dark.colors.text.color}-500`,
      );
      expect(result).toContain(
        `md:dark:bg-${ColorStubs.overrides.medium.dark.colors.background.color}-500`,
      );

      expect(result).toContain(
        `lg:text-${ColorStubs.overrides.large.colors.text.color}-500`,
      );
      expect(result).toContain(
        `lg:bg-${ColorStubs.overrides.large.colors.background.color}-500`,
      );
      expect(result).toContain(
        `lg:dark:text-${ColorStubs.overrides.large.dark.colors.text.color}-500`,
      );
      expect(result).toContain(
        `lg:dark:bg-${ColorStubs.overrides.large.dark.colors.background.color}-500`,
      );
    });
  });
});
