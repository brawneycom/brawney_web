export const resolutions = [
  { name: "base", value: "" },
  { name: "medium", value: "md" },
  { name: "large", value: "lg" },
];

export const getProperties = (res, propName, attrName, prop) => {
  switch (res) {
    case "base":
      return {
        [propName]: { [attrName]: prop },
      };

    case "medium":
    case "large":
      return {
        overrides: {
          [res]: {
            [propName]: { [attrName]: prop },
          },
        },
      };
  }
};
