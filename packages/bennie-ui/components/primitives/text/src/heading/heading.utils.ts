import type { HeadingTagType } from "@bennie-ui/types/texts";

export const getTagSize = (tag: HeadingTagType) => {
  switch (tag) {
    case "h1":
      return "text-3xl";
    case "h2":
      return "text-3xl";
    case "h3":
      return "text-2xl";
    case "h4":
      return "text-2xl";
    case "h5":
      return "text-xl";
    case "h6":
      return "text-xl";
    case "h7":
      return "text-lg";
  }
};

export const getTagWeight = (tag: HeadingTagType) => {
  switch (tag) {
    case "h1":
      return "font-semibold";
    case "h2":
      return "font-medium";

    case "h3":
      return "font-semibold";
    case "h4":
      return "font-medium";

    case "h5":
      return "font-semibold";
    case "h6":
      return "font-medium";

    default:
      return "font-semibold";
  }
};
