export function drawSnake() {
  if (this.snakeSprites) {
    this.snakeSprites.forEach((sprite) => {
      sprite.destroy();
    });
  }

  if (this.movement === "start") {
    const startCells = [
      { row: 7, col: 7 },
      { row: 8, col: 7 },
      { row: 9, col: 7 },
      { row: 10, col: 7 },
      { row: 11, col: 7 },
    ];
    for (let startCell of startCells) {
      const cell = this.boardCells.find((cell) => cell.row === startCell.row && cell.col === startCell.col);
      this.snakeCells.push(cell);
    }
  }
  const move = (to) => {
    const head = this.snakeCells[0];
    let row;
    let col;
    if (to === "up") {
      row = head.row - 1;
      col = head.col;
    }
    if (to === "down") {
      row = head.row + 1;
      col = head.col;
    }
    if (to === "left") {
      row = head.row;
      col = head.col - 1;
    }
    if (to === "right") {
      row = head.row;
      col = head.col + 1;
    }

    const updateCell = this.boardCells.find((cell) => cell.row === row && cell.col === col);
    if (updateCell) {
      this.snakeCells.unshift(updateCell);
      this.snakeCells.pop();
    }
  };

  switch (this.movement) {
    case "up":
      move("up");
      break;
    case "down":
      move("down");
      break;
    case "left":
      move("left");
      break;
    case "right":
      move("right");
      break;
    default:
      this.movement = "up";
      break;
  }

  this.snakeSprites = this.snakeCells.map((cell) => {
    return this.add.image(cell.x, cell.y, "body").setOrigin(0, 0);
  });
}
