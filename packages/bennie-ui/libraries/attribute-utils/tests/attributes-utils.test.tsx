import { describe, test, expect, mock } from "bun:test";
import {
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getClassByViewPort,
  getComponentProperties,
} from "@bennie-ui/attribute-utils";
import { ComponentProperties } from "@bennie-ui/types";

describe("base-attribute", () => {
  describe(":getTextColorAttribute", () => {
    test(" should return default values", () => {
      const color: ColorPropertiesType = {};
      const result = getTextColorAttribute(color);
      expect(result).toEqual("text-white");
    });

    test(" should return black or white without weight", () => {
      let color: ColorPropertiesType = { color: "black" };
      let result = getTextColorAttribute(color);
      expect(result).toEqual("text-black");

      color = { color: "black", weight: "300" };
      result = getTextColorAttribute(color);
      expect(result).toEqual("text-black");

      color = { color: "white" };
      result = getTextColorAttribute(color);
      expect(result).toEqual("text-white");

      color = { color: "white", weight: "300" };
      result = getTextColorAttribute(color);
      expect(result).toEqual("text-white");
    });
  });

  describe(":getBackgroundColorAttribute", () => {
    test(" should return default values", () => {
      const color: ColorPropertiesType = {};
      const result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-slate-500");
    });

    test(" should return black or white without weight", () => {
      let color: ColorPropertiesType = { color: "black" };
      let result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-black");

      color = { color: "black", weight: "300" };
      result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-black");

      color = { color: "white" };
      result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-white");

      color = { color: "white", weight: "300" };
      result = getBackgroundColorAttribute(color);
      expect(result).toEqual("bg-white");
    });
  });

  describe("base-properties", () => {
    test("should return properties className", () => {
      const properties: ComponentProperties = {
        size: "text-3xl",
        className: "foo",
      };
      const result = getComponentProperties(properties);
      expect(result.className).toContain(properties.className);
      expect(result.className).toContain(properties.size);
    });

    test("should return add data-testid", () => {
      const properties: ComponentProperties = {
        dataTestId: "foo-test-id",
      };
      const result = getComponentProperties(properties);
      expect(result["data-testid"]).toContain(properties.dataTestId);
    });

    test("should return onClickEvent", () => {
      const onClickSpy = mock();
      const properties: ComponentProperties = {
        onClick: onClickSpy,
      };
      const result = getComponentProperties(properties);
      expect(result.onClick).toBe(onClickSpy);
    });
  });
});

describe("responsive utils", () => {
  describe("getClassByViewPort", () => {
    test("empty properties", () => {
      const properties: ComponentProperties = {};
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe("");
    });

    test("doesnt throw properties", () => {
      const properties: ComponentProperties = { size: undefined };
      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe("");
    });
  });
});
