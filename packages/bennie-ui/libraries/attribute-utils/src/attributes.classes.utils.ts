import { ComponentProperties } from "@bennie-ui/types";

import { get_classname_by_resolution } from "./attribute.resolutions.utils";
import { get_classname_by_theme } from "./attributes.dark.utils";
import { ClassBuilder } from "./attribute.builder";

export const getClassNames = (...args: string[]) => {
  return args.filter((it) => it ?? "").join(" ");
};

export const get_class_from_property = (
  parent_name: string,
  property_name: string,
  parent_names: string[],
  properties: ComponentProperties,
) => {
  let classes = "";
  const class_builder = ClassBuilder();

  const executable =
    class_builder.get(parent_name, property_name) ||
    class_builder.get(property_name, "");

  if (executable) {
    let props: ComponentProperties | undefined;
    const is_responsive = parent_names.includes("overrides");
    const is_dark = parent_names.includes("dark");
    let class_name: string | undefined = "";

    if (is_responsive) {
      let resolution: string = "";
      if (parent_names.includes("medium")) {
        resolution = "medium";
        if (is_dark) {
          props = properties.overrides?.medium?.dark;
        } else {
          props = properties.overrides?.medium;
        }
      }

      if (parent_names.includes("large")) {
        resolution = "large";
        if (is_dark) {
          props = properties.overrides?.large?.dark;
        } else {
          props = properties.overrides?.large;
        }
      }

      if (props) {
        const class_names =
          executable(props)
            ?.split(" ")
            .filter((it) => it != "") || [];

        class_names.forEach((it) => {
          let tmp_class_name = it;
          if (is_dark) {
            tmp_class_name = get_classname_by_theme("dark", it);
          }
          tmp_class_name = get_classname_by_resolution(
            resolution,
            tmp_class_name,
          );

          class_name += " " + tmp_class_name;
        });

        classes += class_name;
      }
    } else if (is_dark) {
      const props = properties.dark;
      if (props) {
        const class_names =
          executable(props)
            ?.split(" ")
            .filter((it) => it != "") || [];

        class_names.forEach((it) => {
          class_name += " " + get_classname_by_theme("dark", it);
        });
      }

      classes += class_name;
    } else {
      class_name += executable(properties);

      if (is_dark) {
        class_name = get_classname_by_theme("dark", class_name);
      }

      classes += class_name;
    }

    return ` ${classes.trim()}`;
  }

  return "";
};

export const recusiveClassSearch = (
  parent_name: string,
  property_name: string,
  property_value: string,
  parent_names: string[],
  properties: ComponentProperties,
): string => {
  let classes = "";

  if (property_value === undefined) {
    return "";
  }

  const class_builder = ClassBuilder();

  if (class_builder.keys().includes(property_name)) {
    let class_name = get_class_from_property(
      parent_name,
      property_name,
      parent_names,
      properties,
    );

    return class_name;
  }

  const property_type = typeof property_value;

  if (property_type === "string") {
    return get_class_from_property(
      parent_name,
      property_name,
      parent_names,
      properties,
    );
  }

  Object.entries(property_value).forEach(
    ([child_property_name, child_property_value]) => {
      classes += recusiveClassSearch(
        property_name,
        child_property_name,
        child_property_value,
        [property_name, ...parent_names],
        properties,
      );
    },
  );

  return classes;
};

export const getClassByViewPort = (properties: ComponentProperties): string => {
  let classes = "";
  Object.entries(properties).forEach(([property_name, property_value]) => {
    if (property_name !== "children") {
      classes += recusiveClassSearch(
        "",
        property_name,
        property_value,
        [""],
        properties,
      );
    }
  });

  return ` ${classes.trim()}`;
};
