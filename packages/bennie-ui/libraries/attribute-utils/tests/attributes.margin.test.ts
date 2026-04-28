import { describe, test, expect } from "bun:test";

import { resolutions, getProperties } from "./utils";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@bennie-ui/baseline/tailwind/attributes/margin";
import { AllMargins } from "@bennie-ui/types/attributes/margin.types";
import { ComponentProperties } from "@bennie-ui/types";

describe("attributes.margin", () => {
  ["all", "x", "y", "left", "right", "top", "bottom"].forEach((testCase) => {
    test(`:${testCase}`, () => {
      resolutions.forEach((res) => {
        variants.base[testCase].forEach((m) => {
          const m_value = m.includes("auto") ? m : m.split("-")[1];
          const properties = getProperties(
            res.name,
            "margin",
            testCase,
            m_value,
          );
          const result = getClassByViewPort(properties as ComponentProperties);

          expect(result.trim()).toBe(
            res.name === "base" ? m : `${res.value}:${m}`,
          );
        });
      });
    });
  });

  test(`:combined (left, right, top, bottom)`, () => {
    resolutions.forEach((res) => {
      const margin: AllMargins = {
        x: "0",
        y: "0",
        left: "1",
        right: "2",
        top: "3",
        bottom: "4",
      };

      const properties: ComponentProperties =
        res.name === "base"
          ? { margin }
          : { overrides: { [res.name]: { margin } } };

      const result = getClassByViewPort(properties);

      expect(result.trim()).toContain(
        res.name === "base" ? "mx-" + margin.x : `${res.value}:mx-${margin.x}`,
      );
      expect(result.trim()).toContain(
        res.name === "base" ? "my-" + margin.y : `${res.value}:my-${margin.y}`,
      );

      expect(result.trim()).toContain(
        res.name === "base"
          ? "ml-" + margin.left
          : `${res.value}:ml-${margin.left}`,
      );
      expect(result.trim()).toContain(
        res.name === "base"
          ? "mr-" + margin.right
          : `${res.value}:mr-${margin.right}`,
      );
      expect(result.trim()).toContain(
        res.name === "base"
          ? "mt-" + margin.top
          : `${res.value}:mt-${margin.top}`,
      );
      expect(result.trim()).toContain(
        res.name === "base"
          ? "mb-" + margin.bottom
          : `${res.value}:mb-${margin.bottom}`,
      );
    });
  });
});
