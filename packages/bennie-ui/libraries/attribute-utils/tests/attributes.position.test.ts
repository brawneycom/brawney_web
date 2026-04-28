import { describe, test, expect } from "bun:test";

import { resolutions, getProperties } from "./utils";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@bennie-ui/baseline/tailwind/attributes/position";
import { ComponentProperties } from "@bennie-ui/types";

describe("attributes.position", () => {
  ["all", "x", "y", "top", "bottom", "left", "right"].forEach((testCase) => {
    resolutions.forEach((res) => {
      variants.base.inset[testCase].forEach((pos) => {
        test.only(`position ${res.value}:${testCase}:${pos}`, () => {
          const p_values = pos.split("-");
          const p_value = p_values.length === 2 ? p_values[1] : p_values[2];
          const properties = getProperties(
            res.name,
            "position",
            testCase,
            p_value,
          );

          const result = getClassByViewPort(properties as ComponentProperties);
          expect(result.trim()).toContain(
            res.name === "base" ? `${pos}` : `${res.value}:${pos}`,
          );
        });
      });
    });
  });
});
