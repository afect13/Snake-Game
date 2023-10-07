export function drawApple() {
  if (this.appleSprites) {
    this.appleSprites.destroy();
  }
  const availableCells = this.boardCells.filter((cell) => {
    const isOnSnake = this.snakeCells.some((snakeCell) => {
      return snakeCell.row === cell.row && snakeCell.col === cell.col;
    });
    return !isOnSnake;
  });
  if (availableCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    this.appleCells = availableCells[randomIndex];
    this.appleSprites = this.add.image(this.appleCells.x, this.appleCells.y, "apple").setOrigin(0, 0);
  }
}
