import { FC } from "react";
import { getClassByViewPort } from "@bennie-ui/attribute-utils";
import { ColorType, AllHeights, AllWidths } from "@bennie-ui/types/attributes";
import { SolidIcon } from "./solid/solid-icon";
import { IconProps } from "./types/icon.types";

const Icon: FC<IconProps> = (props) => {
  const height: AllHeights = props.height
    ? { value: props.height }
    : { value: "6" };
  const width: AllWidths = props.width
    ? { value: props.width }
    : { value: "6" };
  const colors: ColorType = props.colors
    ? props.colors
    : { text: { color: "blue" } };

  const className = getClassByViewPort({
    height,
    width,
    colors,

    dark: props.dark,
    // @ts-expect-error: icon props are smaller than component props but they follow the same priniciple
    overrides: props.overrides || undefined,
  });

  return (
    <SolidIcon
      className={className}
      figure={props.figure}
      onClick={props.onClick}
    />
  );
};

Icon.displayName = "Icon";

export { Icon };
