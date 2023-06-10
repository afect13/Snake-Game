import Phaser from "phaser";
import { useEffect, useRef } from "react";
import { imageFiles, imagePath, soundFiles, soundPath } from "../Сonstants/assetPaths";
import { setScreenDimension } from "../Utils/setScreenDimension";
import { setCanvasStyles } from "../Utils/setCanvasStyles";
import { initGame } from "../Utils/initGame";
import { drawCells } from "./../Utils/drawCells";
import { drawSnake } from "../Utils/drawSnake";
import { drawApple } from "../Utils/drawApple";

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
      Object.entries(soundFiles).forEach(([key, file]) => {
        this.load.audio(key, soundPath + file);
      });

      Object.entries(imageFiles).forEach(([key, file]) => {
        this.load.image(key, imagePath + file);
      });
    }
    function create() {
      setCanvasStyles.call(this);
      initGame.call(this);
      drawCells.call(this);
      this.time.addEvent({
        delay: 500,
        loop: true,
        callback: () => {
          drawSnake.call(this, drawApple.bind(this));
        },
        callbackScope: this,
      });
    }
    function update() {
      if (this.keyboard.left.isDown && this.movement !== "right" && this.prevMovement !== "right") {
        this.movement = "left";
      } else if (this.keyboard.right.isDown && this.movement !== "left" && this.prevMovement !== "left") {
        this.movement = "right";
      } else if (this.keyboard.up.isDown && this.movement !== "down" && this.prevMovement !== "down") {
        this.movement = "up";
      } else if (this.keyboard.down.isDown && this.movement !== "up" && this.prevMovement !== "up") {
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
