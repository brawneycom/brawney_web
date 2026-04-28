import { describe, test, expect } from "bun:test";

import { getClassByViewPort } from "../src/attributes.classes.utils";
import { ColorValue, ColorWeight } from "@bennie-ui/types/attributes";
import { ComponentProperties } from "@bennie-ui/types";

describe("attributes.color", () => {
  test(`:text-color default weight`, () => {
    const color: ColorValue = "blue";
    const properties: ComponentProperties = {
      colors: {
        text: {
          color,
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`text-${color}-500`);
  });

  test(`:text-color plus weight `, () => {
    const color: ColorValue = "blue";
    const weight: ColorWeight = "200";
    const properties: ComponentProperties = {
      colors: {
        text: {
          color,
          weight,
        },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`text-${color}-${weight}`);
  });

  test(`:bg-color default weight`, () => {
    const color: ColorValue = "blue";
    const properties: ComponentProperties = {
      colors: {
        background: { color },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`bg-${color}-500`);
  });

  test(`:bg-color plus weight `, () => {
    const color: ColorValue = "blue";
    const weight: ColorWeight = "200";
    const properties: ComponentProperties = {
      colors: {
        background: { color, weight },
      },
    };
    const result = getClassByViewPort(properties);
    expect(result.trim()).toBe(`bg-${color}-${weight}`);
  });
});
