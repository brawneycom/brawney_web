import { describe, test, expect } from "bun:test";
import { ComponentProperties } from "@bennie-ui/types";
import { variants } from "@bennie-ui/baseline/tailwind/display/flex";
import { resolutions, getProperties } from "./utils";
import { getClassByViewPort } from "../src/attributes.classes.utils";

describe("attributes.flex", () => {
  resolutions.forEach((res) => {
    variants.base.directions.slice(0, 1).forEach((direction) => {
      test(`:direction - ${res.value || "sm"}:${direction}`, () => {
        const direction_value = direction.substr(5, direction.length - 1);
        const properties = getProperties(
          res.name,
          "flex",
          "direction",
          direction_value,
        );
        const result = getClassByViewPort(properties as ComponentProperties);

        expect(result).toContain("flex ");

        if (res.name === "base") {
          expect(result).toContain(direction);
        } else {
          expect(result).toContain(`${res.value}:${direction}`);
        }
      });
    });
  });

  resolutions.forEach((res) => {
    variants.base.alignItems.forEach((alignItems) => {
      test(`:alignItems - ${res.value || "sm"}:${alignItems}`, () => {
        const align_value = alignItems.substr(6, alignItems.length - 1);

        const properties = getProperties(
          res.name,
          "flex",
          "alignItems",
          align_value,
        );
        const result = getClassByViewPort(properties as ComponentProperties);

        expect(result).toContain("flex ");

        if (res.name === "base") {
          expect(result).toContain(alignItems);
        } else {
          expect(result).toContain(`${res.value}:${alignItems}`);
        }
      });
    });
  });

  resolutions.forEach((res) => {
    variants.base.justifyContent.forEach((justifyContent) => {
      test(`:justifyContent - ${res.value || "sm"}:${justifyContent}`, () => {
        const justify_value = justifyContent.substr(
          8,
          justifyContent.length - 1,
        );

        const properties = getProperties(
          res.name,
          "flex",
          "justifyContent",
          justify_value,
        );
        const result = getClassByViewPort(properties as ComponentProperties);
        expect(result).toContain("flex ");

        if (res.name === "base") {
          expect(result).toContain(justifyContent);
        } else {
          expect(result).toContain(`${res.value}:${justifyContent}`);
        }
      });
    });
  });

  resolutions.forEach((res) => {
    variants.base.shrink.forEach((shrink) => {
      test(`:shrink ${res.value || "sm"}: ${shrink}`, () => {
        const shrink_value = shrink === "shrink" ? "1" : "0";
        const properties = getProperties(
          res.name,
          "flex",
          "shrink",
          shrink_value,
        );
        const result = getClassByViewPort(properties as ComponentProperties);
        expect(result).toContain("flex ");

        if (res.name === "base") {
          expect(result).toContain(shrink);
        } else {
          expect(result).toContain(`${res.value}:${shrink}`);
        }
      });
    });
  });

  resolutions.forEach((res) => {
    variants.base.grow.forEach((grow) => {
      test(`:grow ${res.value || "sm"}: ${grow}`, () => {
        const grow_value = grow === "grow" ? "1" : "0";

        const properties = getProperties(
          res.name,
          "flex",
          "grow",
          grow_value,
        ) as ComponentProperties;
        const result = getClassByViewPort(properties);
        expect(result).toContain("flex ");

        if (res.name === "base") {
          expect(result).toContain(grow);
        } else {
          expect(result).toContain(`${res.value}:${grow}`);
        }
      });
    });
  });
});
