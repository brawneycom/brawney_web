import { DecimalType, NumericMediumnRangeType, NumericMinRangeType, NumericZeroType } from "../attributes";

type GridTemplate = "none" | "subgrid";
type StartEndType = {
  span?: "auto" | "full" | NumericMinRangeType;
  start?: "auto" | NumericMinRangeType;
  end?: "auto" | NumericMinRangeType;
};
type GridGap = DecimalType | NumericZeroType | NumericMinRangeType | NumericMediumnRangeType;
type GridFlow = "row" | "col" | "dense" | "row-dense" | "col-dense";
type GridSpan = 'auto' | 'full' | NumericMinRangeType 
export type GridType = {
  order?: NumericMinRangeType;
  gap?: GridGap;
  flow?: GridFlow;
  span?: {
    rows?: GridSpan,
    columns?: GridSpan,
  };
  start?: {
    rows?: StartEndType;
    columns?: StartEndType;
  },
  templates?: {
    rows?: GridTemplate | NumericMinRangeType;
    columns?: GridTemplate | NumericMinRangeType;
  };
 
};
