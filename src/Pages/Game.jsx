import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { createBoardCells } from "./../Utils/drawCells";
import { setCanvasStyles } from "../Utils/canvasStyles";
import { setScreenDimension } from "./../Utils/screenDimension";
import { drawSnake } from "../Utils/drawSnake";
import { generateApple } from "../Utils/drawApple";

const Game = () => {
  const gameRef = useRef(null);
  useEffect(() => {
    const config = {
      type: Phaser.CANVAS,
      width: setScreenDimension("width"),
      height: setScreenDimension("height"),
      parent: gameRef.current,
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };
    const game = new Phaser.Game(config);

    function preload() {
      this.load.image("background", "/images/background.png");
      this.load.image("cell", "/images/cell.png");
      this.load.image("body", "/images/body.png");
      this.load.image("apple", "/images/apple.png");
      this.load.image("head", "/images/head.png");
    }

    function create() {
      this.movement = "start";
      this.snakeCells = [];
      this.appleCells = [];
      setCanvasStyles.call(this);
      this.keyboard = this.input.keyboard.createCursorKeys();
      this.boardCells = createBoardCells.call(this);

      this.add.image(0, 0, "background").setOrigin(0, 0);
      this.boardCells.forEach((cell) => {
        this.add.image(cell.x, cell.y, "cell").setOrigin(0, 0);
      });
      this.time.addEvent({
        delay: 500,
        loop: true,
        callback: () => {
          drawSnake.call(this, generateApple.bind(this));
        },
        callbackScope: this,
      });
      console.log(this.keyboard.left);
    }
    function update() {
      if (this.keyboard.left.isDown && this.movement !== "right") {
        this.movement = "left";
      } else if (this.keyboard.right.isDown && this.movement !== "left") {
        this.movement = "right";
      } else if (this.keyboard.up.isDown && this.movement !== "down") {
        this.movement = "up";
      } else if (this.keyboard.down.isDown && this.movement !== "up") {
        this.movement = "down";
      }
    }

    return () => {
      game.destroy();
    };
  }, []);

  return <div ref={gameRef}></div>;
};

export default Game;
