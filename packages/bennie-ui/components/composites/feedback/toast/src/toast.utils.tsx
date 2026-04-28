import { ToastProps } from "./toast.types";
export const getToastScale = ({ scale, className }: ToastProps): string => {
  const classes = className?.split(" ") || null;
  const padding_class = classes?.find((it) => it.includes("p"));

  if (padding_class) {
    return "";
  }

  switch (scale) {
    case "medium":
      return "text-md px-4 py-2";

    case "large":
      return "text-lg px-16 py-3";

    default:
      return "text-sm px-3 py-2";
  }
};
