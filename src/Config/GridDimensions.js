const defaultDimension = {
  height: window.screen.availHeight - (window.outerHeight - window.innerHeight),
  width: window.screen.availWidth - (window.outerWidth - window.innerWidth),
  size: 24
};

const minRequirements = {
  height: 100,
  width: 100,
  minSize: 10,
  maxSize: 24
};

export {
  defaultDimension, minRequirements
};
