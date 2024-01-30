import agi from "/public/images/icons/agi.png";
import str from "/public/images/icons/str.png";
import int from "/public/images/icons/int.png";
import all from "/public/images/icons/all.png";

export const getAttributeIcon = (attribute: string) => {
  switch (attribute) {
    case "agi":
      return agi;
    case "str":
      return str;
    case "int":
      return int;
    case "all":
      return all;
    default:
      return null;
  }
};
