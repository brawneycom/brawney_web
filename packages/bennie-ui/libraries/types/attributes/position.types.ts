import {
  DecimalType,
  PercentageHalvesType,
  PercentageThirdsType,
  PercentageFourthsType,
  NumericMinRangeType,
  NumericMediumnRangeType,
} from "./attribute.types";

export type PositionNumericTypes =
  | NumericMinRangeType
  | NumericMediumnRangeType;
export type PositionPerentageTypes =
  | PercentageHalvesType
  | PercentageThirdsType
  | PercentageFourthsType;
export type PositionValues =
  | "px"
  | "auto"
  | "full"
  | DecimalType
  | PositionNumericTypes
  | PositionPerentageTypes;
export type PositionType =
  | "static"
  | "relative"
  | "fixed"
  | "absolute"
  | "relative"
  | "sticky";

export type PositionIndex = '0' | '10' | '20' | '30' | '40' | '50' | 'auto'
export interface AllPositions {
  style?: PositionType;
  index?: PositionIndex;
  all?: PositionValues;
  x?: PositionValues;
  y?: PositionValues;
  top?: PositionValues;
  left?: PositionValues;
  right?: PositionValues;
  bottom?: PositionValues;
}
