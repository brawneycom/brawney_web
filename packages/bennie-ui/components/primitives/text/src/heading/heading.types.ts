import { ReactNode } from "react";
import { ColorType } from "@bennie-ui/types/attributes";
import { HeadingTagType, TextAlignmentType } from "@bennie-ui/types/texts";

export interface HeadingProperties {
  children: ReactNode;
  className?: string;
  align?: TextAlignmentType;
  tag?: HeadingTagType;
  colors?: ColorType;
  id?: string;
  dataTestId?: string;
}
