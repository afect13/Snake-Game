export function setScreenDimension(params) {
  let width;
  let height;

  const dimension = {
    max: {
      width: 640,
      height: 360,
    },
    min: {
      width: 300,
      height: 300,
    },
    real: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
  if (dimension.real.width / dimension.real.height > dimension.max.width / dimension.max.height) {
    height = Math.floor((dimension.max.width * dimension.real.height) / dimension.real.width);
    height = Math.min(height, dimension.max.height);
    height = Math.max(height, dimension.min.height);
    width = Math.floor((dimension.real.width * height) / dimension.real.height);
  } else {
    width = Math.floor((dimension.real.width * dimension.max.height) / dimension.real.height);
    width = Math.min(width, dimension.max.width);
    width = Math.max(width, dimension.min.width);
    height = Math.floor((width * dimension.real.height) / dimension.real.width);
  }

  return params === "width" ? width : height;
}
