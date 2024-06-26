export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    css: function (prop, value) {
      if (value === undefined) {
        if (element === undefined) {
          return undefined;
        }
        const value = element.style[prop];
        return value === "" ? undefined : value;
      }
      if (element != null) {
        element.style[prop] = value;
      }
      return this;
    },
  };
}
