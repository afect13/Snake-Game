import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { createBoardCells, createSnake } from "./../Utils/utils";
import { setCanvasStyles } from "../Utils/setCanvasStyles";

const Game = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 640,
      height: 360,
      parent: gameRef.current,
      scene: {
        preload: preload,
        create: create,
      },
    };
    const game = new Phaser.Game(config);
    function preload() {
      this.load.image("background", "/images/background.png");
      this.load.image("cell", "/images/cell.png");
      this.load.image("body", "/images/body.png");
    }

    function create() {
      setCanvasStyles.call(this);
      const boardCells = createBoardCells.call(this);
      const snakeCells = createSnake(boardCells);

      this.add.image(0, 0, "background").setOrigin(0, 0);
      boardCells.forEach((cell) => {
        this.add.image(cell.x, cell.y, "cell").setOrigin(0, 0);
      });
      snakeCells.forEach((cell) => {
        this.add.image(cell.x, cell.y, "body").setOrigin(0, 0);
      });
    }

    return () => {
      game.destroy();
    };
  }, []);

  return (
    <div ref={gameRef} className="w-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></div>
  );
};

export default Game;
