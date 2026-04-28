import {
  DecimalType,
  NumericMinRangeType,
  NumericMediumnRangeType,
} from "./attribute.types";
type MarginAutoType = "auto" | "s-auto" | "e-auto";
export type MarginValues =
  | MarginAutoType
  | DecimalType
  | NumericMinRangeType
  | NumericMediumnRangeType;

export interface AllMargins {
  all?: MarginValues;
  x?: MarginValues;
  y?: MarginValues;
  top?: MarginValues;
  left?: MarginValues;
  right?: MarginValues;
  bottom?: MarginValues;
}
