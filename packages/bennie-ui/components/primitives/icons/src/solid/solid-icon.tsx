/*eslint import/namespace: ['error', { allowComputed: true }]*/
import { FC } from "react";
import * as Icons from "@heroicons/react/24/solid";
import { BasicIconProps } from "../types/icon.types";

const SolidIcon: FC<BasicIconProps> = ({ className, figure, onClick }) => {
  // @ts-expect-error: ignore
  const Icon: JSX.Element = Icons[figure];

  const handleOnClick = () => {
    onClick && onClick();
  };

  if (Icon) {
    // @ts-expect-error ignore
    return <Icon className={className} onClick={handleOnClick} />;
  }
  return null;
};

SolidIcon.displayName = "OutlineIcon";

export { SolidIcon };
