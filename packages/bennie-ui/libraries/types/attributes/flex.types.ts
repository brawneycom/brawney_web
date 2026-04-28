import { NumericMinRangeType } from "./attribute.types";

export type FlexDirectionType = "row" | "col" | "row-reverse" | "col-reverse";
export type FlexGrowType = "1" | "0";
export type FlexShrinkType = "1" | "0"; //"shrink" | "shrink-0";
export type FlexWrapType = "wrap" | "nowrap" | "reverse";
export type FlexJustifyContentType =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";
export type FlexAlignItemsType =
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "baseline";

export type FlexAlignSelfType =
  | "auto"
  | "stretch"
  | "center"
  | "start"
  | "end"
  | "baseline";

export interface FlexType {
  alignItems?: FlexAlignItemsType;
  alignSelf?: FlexAlignSelfType;
  alignContent?: FlexAlignItemsType;
  direction?: FlexDirectionType;
  grow?: FlexGrowType;
  justifyContent?: FlexJustifyContentType;
  wrap?: FlexWrapType;
  order?: NumericMinRangeType;
  shrink?: FlexShrinkType;
}
