export type PercentageHalvesType = "1/2";
export type PercentageThirdsType = "1/3" | "2/3";
export type PercentageFourthsType = "1/4" | "2/4" | "3/4";
export type PercentageFifthsType = "1/5" | "2/5" | "3/5" | "4/5";
export type PercentageSixtsType = "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
export type PercentageTwelveType =
  | "1/12"
  | "2/12"
  | "3/12"
  | "4/12"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/12";

export type NumericZeroType = "0";
export type NumericMinRangeType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type NumericMediumnRangeType =
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40";

export type NumericMaxRangeType =
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96";

export type NumericType =
  | NumericZeroType
  | NumericMinRangeType
  | NumericMediumnRangeType
  | NumericMaxRangeType;

export type DecimalType = "0" | "0.5" | "1.5" | "2.5" | "3.5";
export type PercentageType =
  | PercentageHalvesType
  | PercentageThirdsType
  | PercentageFourthsType
  | PercentageFifthsType
  | PercentageSixtsType
  | PercentageTwelveType;

export type TargetType = "_self" | "_blank";
export type ActionType =
  | "neutral"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type BorderStyle = "solid" | "dashed" | "dotted" | "bubble" | "none";
export type BorderWidth = "0" | "1" | "2" | "4" | "8";

export type BorderTypes = {
  style?: BorderStyle;
  width?: {
    all?: BorderWidth;
    x?: BorderWidth;
    y?: BorderWidth;
    s?: BorderWidth;
    e?: BorderWidth;
    t?: BorderWidth;
    r?: BorderWidth;
    b?: BorderWidth;
    l?: BorderWidth;
  };
};

export type RoundingValues = "none" | "md" | "lg" | "2xl" | "3xl" | "full";
export type RoundingType = {
  all?: RoundingValues;
  s?: RoundingValues;
  e?: RoundingValues;
  t?: RoundingValues;
  r?: RoundingValues;
  b?: RoundingValues;
  l?: RoundingValues;
  ss?: RoundingValues;
  se?: RoundingValues;
  ee?: RoundingValues;
  es?: RoundingValues;
  tl?: RoundingValues;
  tr?: RoundingValues;
  br?: RoundingValues;
  bl?: RoundingValues;
};

export type OpacityType =
  | "100"
  | "90"
  | "80"
  | "70"
  | "60"
  | "50"
  | "40"
  | "30"
  | "25"
  | "20"
  | "10"
  | "5"
  | "0";
export type ScaleType = "small" | "medium" | "large";

export type ColorValue =
  | "black"
  | "white"
  | "neutral"
  | "stone"
  | "slate"
  | "gray"
  | "zinc"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type ColorWeight =
  | "0"
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

export type ColorPropertiesType = { color?: ColorValue; weight?: ColorWeight };
export type ColorType = {
  text?: ColorPropertiesType;
  background?: ColorPropertiesType;
  border?: ColorPropertiesType;
};
