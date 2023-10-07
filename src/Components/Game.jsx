import Phaser from "phaser";
import { useEffect, useRef, useState } from "react";
import { imageFiles, imagePath, soundFiles, soundPath } from "../Constants/assetPaths";
import { setScreenDimension } from "../Utils/setScreenDimension";
import { setCanvasStyles } from "../Utils/setCanvasStyles";
import { initGame } from "../Utils/initGame";
import { drawCells } from "../Utils/drawCells";
import { drawSnake } from "../Utils/drawSnake";
import { drawApple } from "../Utils/drawApple";
import Modal from "./Modal";

const Game = ({ togglePage }) => {
  const gameRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);
  const gameRestartRef = useRef(gameRestart);
  const handleRestartGame = () => {
    setGameOver((prev) => !prev);
    setGameRestart((prev) => !prev);
  };
  useEffect(() => {
    gameRestartRef.current = gameRestart;
  }, [gameRestart]);
  useEffect(() => {
    const config = {
      type: Phaser.CANVAS,
      width: setScreenDimension("width"),
      height: setScreenDimension("height"),
      parent: gameRef.current,
      pixelArt: true,
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
      this.snakeInterval = this.time.addEvent({
        delay: 300,
        loop: true,
        callback: () => {
          drawSnake.call(this, drawApple.bind(this), setGameOver);
        },
        callbackScope: this,
      });
    }
    function update() {
      if (gameRestartRef.current) {
        this.scene.restart();
        setGameRestart((prev) => !prev);
      }
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

  return (
    <>
      <div ref={gameRef}></div>
      {gameOver && <Modal restart={handleRestartGame} togglePage={togglePage} />}
    </>
  );
};

export default Game;
