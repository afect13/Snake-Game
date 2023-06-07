export function setCanvasStyles() {
  const canvas = this.game.canvas;
  canvas.style.height = "100vh";
  canvas.style.position = "absolute";
  canvas.style.top = "50%";
  canvas.style.left = "50%";
  canvas.style.transform = "translate(-50%, -50%)";
}
