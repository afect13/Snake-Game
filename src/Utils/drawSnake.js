export function drawSnake(generateApple) {
  if (this.snakeSprites) {
    this.snakeSprites.forEach((sprite) => {
      sprite.destroy();
    });
  }
  // Флаг клавиши от многократного нажатия
  this.keyboardPress = false;
  if (this.movement === "start") {
    const startCells = [
      { row: 7, col: 7 },
      { row: 8, col: 7 },
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

      if (head.row === this.appleCells.row && head.col === this.appleCells.col) {
        generateApple();
      } else {
        this.snakeCells.pop();
      }
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
      // Переводим из start в up и генерим первое яблочко
      this.movement = "up";
      generateApple();
      break;
  }

  this.snakeSprites = this.snakeCells.map((cell, index) => {
    let sprite;
    let headSize = this.textures.get("head").source[0].width;
    if (index === 0) {
      sprite = this.add.sprite(cell.x + headSize / 2, cell.y + headSize / 2, "head").setOrigin(0.5, 0.5);
      if (this.movement === "up") {
        sprite.angle = 0;
      } else if (this.movement === "down") {
        sprite.angle = 180;
      } else if (this.movement === "left") {
        sprite.angle = -90;
      } else if (this.movement === "right") {
        sprite.angle = 90;
      }
    } else {
      sprite = this.add.sprite(cell.x, cell.y, "body").setOrigin(0, 0);
    }
    return sprite;
  });
}
