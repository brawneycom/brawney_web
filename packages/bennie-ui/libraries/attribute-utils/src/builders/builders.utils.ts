export const getPrefix = (property: string, propertyName: string) => {
  let prefix = property;
  switch (propertyName) {
    case "all": {
      prefix = property;
      break;
    }

    case "x": {
      prefix = property + "x";
      break;
    }

    case "y": {
      prefix = property + "y";
      break;
    }

    case "top": {
      prefix = property + "t";
      break;
    }

    case "bottom": {
      prefix = property + "b";
      break;
    }

    case "left": {
      prefix = property + "l";
      break;
    }

    case "right": {
      prefix = property + "r";
      break;
    }

    default: {
      prefix = property;
      break;
    }
  }
  return prefix;
};
