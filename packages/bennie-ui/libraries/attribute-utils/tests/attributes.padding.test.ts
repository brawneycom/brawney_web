import { describe, test, expect } from "bun:test";

import { resolutions, getProperties } from "./utils";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@bennie-ui/baseline/tailwind/attributes/padding";
import { AllPaddings } from "@bennie-ui/types/attributes/padding.types";
import { ComponentProperties } from "@bennie-ui/types";

describe("attributes.padding", () => {
  ["all", "x", "y", "top", "bottom", "left", "right"].forEach((testCase) => {
    test.only(`padding :${testCase}`, () => {
      resolutions.forEach((res) => {
        variants.base[testCase].slice(0, 1).forEach((p) => {
          const p_value = p.split("-")[1];
          const properties = getProperties(
            res.name,
            "padding",
            testCase,
            p_value,
          );
          const result = getClassByViewPort(properties as ComponentProperties);
          expect(result.trim()).toBe(
            res.name === "base" ? p : `${res.value}:${p}`,
          );
        });
      });
    });
  });

  test(`:combined (left, right, top, bottom)`, () => {
    resolutions.forEach((res) => {
      const padding: AllPaddings = {
        left: "0",
        right: "1",
        top: "2",
        bottom: "3",
        x: "4",
        y: "5",
      };

      const properties: ComponentProperties =
        res.name === "base"
          ? { padding }
          : { overrides: { [res.name]: { padding } } };

      const result = getClassByViewPort(properties);

      expect(result.trim()).toContain(
        res.name === "base"
          ? "pl-" + padding.left
          : `${res.value}:pl-${padding.left}`,
      );

      expect(result.trim()).toContain(
        res.name === "base"
          ? "pr-" + padding.right
          : `${res.value}:pr-${padding.right}`,
      );

      expect(result.trim()).toContain(
        res.name === "base"
          ? "pt-" + padding.top
          : `${res.value}:pt-${padding.top}`,
      );

      expect(result.trim()).toContain(
        res.name === "base"
          ? "pb-" + padding.bottom
          : `${res.value}:pb-${padding.bottom}`,
      );

      expect(result.trim()).toContain(
        res.name === "base"
          ? "px-" + padding.x
          : `${res.value}:px-${padding.x}`,
      );

      expect(result.trim()).toContain(
        res.name === "base"
          ? "py-" + padding.y
          : `${res.value}:py-${padding.y}`,
      );
    });
  });
});
