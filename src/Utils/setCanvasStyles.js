export function setCanvasStyles() {
  const canvas = this.game.canvas;
  if (this.sys.game.config.width / this.sys.game.config.height > 640 / 360) {
    canvas.style.width = "100vw";
  } else {
    canvas.style.height = "100vh";
  }
  canvas.style.position = "absolute";
  canvas.style.top = "50%";
  canvas.style.left = "50%";
  canvas.style.transform = "translate(-50%, -50%)";
}
