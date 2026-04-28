export const get_classname_by_theme = (
  theme: string,
  className: string,
): string => {
  if (theme === "dark") {
    return `dark:${className}`;
  }
  return ` ${className}`;
};
