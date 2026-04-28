/*eslint import/namespace: ['error', { allowComputed: true }]*/
import React, { FC } from "react";
import * as Icons from "@heroicons/react/24/outline";
import { BasicIconProps } from "../types/icon.types";

const OutlineIcon: FC<BasicIconProps> = ({ className, figure, onClick }) => {
  // @ts-expect-error: ignore
  const Icon: JSX.Element = Icons[figure];

  const handleOnClick = () => {
    console.log("f: handleOnClick");
    onClick && onClick();
  };

  if (Icon) {
    // @ts-expect-error ignore
    return <Icon className={className} onClick={handleOnClick} />;
  }
  return null;
};

OutlineIcon.displayName = "OutlineIcon";

export { OutlineIcon };
