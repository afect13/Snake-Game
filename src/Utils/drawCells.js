export function drawCells() {
  const cellSize = this.textures.get("cell").getSourceImage().width + 1;
  console.log(cellSize);
  const canvasWidth = this.sys.game.config.width;
  const canvasHeigh = this.sys.game.config.height;
  const size = 15;
  const cell = [];
  const offsetX = (canvasWidth - cellSize * size) / 2;
  const offsetY = (canvasHeigh - cellSize * size) / 2;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      cell.push({ row: row, col: col, x: offsetX + cellSize * col, y: offsetY + cellSize * row });
    }
  }
  cell.forEach((cell) => {
    this.add.image(cell.x, cell.y, "cell").setOrigin(0, 0);
  });
  this.boardCells = cell;
}
