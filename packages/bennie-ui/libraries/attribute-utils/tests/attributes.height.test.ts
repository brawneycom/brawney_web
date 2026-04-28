import { describe, test, expect } from "bun:test";

import { resolutions, getProperties } from "./utils";
import { getClassByViewPort } from "../src/attributes.classes.utils";
import { variants } from "@bennie-ui/baseline/tailwind/attributes/height";
import { ComponentProperties } from "@bennie-ui/types";

describe("attributes.height", () => {
  resolutions.forEach((res) => {
    variants.base.forEach((h: string) => {
      test.only(` :${h}`, () => {
        const h_value = h.split("-")[1];
        const properties = getProperties(res.name, "height", "value", h_value);
        const result = getClassByViewPort(properties as ComponentProperties);

        expect(result.trim()).toBe(
          res.name === "base" ? h : `${res.value}:${h}`,
        );
      });
    });
  });

  test.skip(`:combined (left, right, top, bottom)`, () => {
    resolutions.forEach((res) => {
      const properties: ComponentProperties = {
        height: {
          value: "5",
        },
        overrides: {
          medium: {
            height: {
              value: "8",
            },
          },
          large: {
            height: {
              value: "10",
            },
          },
        },
      };

      const result = getClassByViewPort(properties);
      expect(result.trim()).toBe("h-5 md:h-8 lg:h-10");
    });
  });
});
