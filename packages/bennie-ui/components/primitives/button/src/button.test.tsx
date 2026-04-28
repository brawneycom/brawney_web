import { describe, test, expect, mock } from "bun:test";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./button";
import { ColorStubs } from "@bennie-ui/attribute-utils/stubs";
import { type ButtonProperties } from "./button.types";

describe("Button", () => {
  test(":default", () => {
    const button = <Button>Hello World</Button>;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual("button p-2");
  });

  test(":action", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      action: "primary",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button p-2 text-white bg-blue-500",
    );
  });

  test(":colors", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      colors: {
        text: { color: "red" },
        background: { color: "gray" },
      },
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    const result = container.querySelector("button")?.className;
    expect(result).toEqual("button p-2 text-red-500 bg-gray-500");
  });

  test(":action should override :color", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      action: "primary",
      colors: {
        text: { color: "red" },
        background: { color: "gray" },
      },
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button p-2 text-white bg-blue-500",
    );
  });

  // TODO: Fix this test
  test.skip(":action should override :classname", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      action: "primary",
      className: "text-red-500 bg-teal-200",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button p-2 text-white bg-blue-500",
    );
  });

  // TODO: Fix this test
  test.skip(":classname should override :colors", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      className: "text-yellow-100 bg-teal-200",
      colors: {
        text: { color: "red" },
        background: { color: "gray" },
      },
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button p-2 text-yellow-100 bg-teal-200",
    );
  });

  test(":size", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      scale: "large",
      action: "neutral",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button px-16 py-3 text-white bg-slate-500",
    );
  });

  test.skip(":rounded", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      rounding: "lg",
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button p-2 rounded-lg",
    );
  });

  test(":full_width", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      full_width: true,
    };
    const button = <Button {...props} />;
    const { container } = render(button);
    expect(container.querySelector("button")?.className).toEqual(
      "button p-2 w-full",
    );
  });

  test(":onClickEvent", () => {
    const onClickSpy = mock();
    const testId = "test-button";
    const props: ButtonProperties = {
      children: "Hello World",
      onClick: onClickSpy,
      dataTestId: testId,
    };

    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId(testId);
    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });

  test(":disable", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      disabled: true,
    };
    const { container } = render(<Button {...props} />);

    expect(container.querySelector("button")?.hasAttribute("disabled")).toBe(
      true,
    );
  });

  test(":colors", () => {
    const props: ButtonProperties = {
      children: "Hello World",
      ...ColorStubs,
    };

    const button = <Button {...props} />;
    const { container } = render(button);
    const result = container.querySelector("button")?.className;
    //console.log("f: result", result);
    expect(result).toContain(`text-${ColorStubs.colors.text.color}-500`);
    expect(result).toContain(`bg-${ColorStubs.colors.background.color}-500`);
    expect(result).toContain(
      `dark:text-${ColorStubs.dark.colors.text.color}-500`,
    );
    expect(result).toContain(
      `dark:bg-${ColorStubs.dark.colors.background.color}-500`,
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
