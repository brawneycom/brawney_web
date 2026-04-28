import {
  DecimalType,
  NumericMinRangeType,
  NumericMediumnRangeType,
} from "./attribute.types";
export type PaddingValues =
  | DecimalType
  | NumericMinRangeType
  | NumericMediumnRangeType;

export interface AllPaddings {
  all?: PaddingValues;
  x?: PaddingValues;
  y?: PaddingValues;
  top?: PaddingValues;
  left?: PaddingValues;
  right?: PaddingValues;
  bottom?: PaddingValues;
}
