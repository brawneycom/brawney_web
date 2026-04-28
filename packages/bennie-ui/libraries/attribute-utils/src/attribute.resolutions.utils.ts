export const get_classname_by_resolution = (
  resolution: string,
  className: string,
): string => {
  if (resolution === "medium") {
    return `md:${className}`;
  }
  if (resolution === "large") {
    return `lg:${className}`;
  }
  return `${className}`;
};
