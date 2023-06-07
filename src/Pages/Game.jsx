import { useEffect, useRef } from "react";
import Phaser from "phaser";
import { createCells } from "../Utils/utils.js";

const Game = () => {
  const gameRef = useRef(null);
  //   const startGame = () => {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext("2d");
  //     const background = new Image();
  //     background.src = "/images/background.jpg";
  //     window.requestAnimationFrame(() => {
  //       ctx.drawImage(background, 0, 0);
  //     });
  //     console.log(background);
  //   };
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
    }

    function create() {
      const canvas = game.canvas;
      const cell = createCells();
      console.log(cell);

      canvas.style.width = "100%";
      canvas.style.position = "absolute";
      canvas.style.top = "50%";
      canvas.style.left = "50%";
      canvas.style.transform = "translate(-50%, -50%)";

      this.add.image(0, 0, "background").setOrigin(0, 0);
      this.add.image(0, 0, "cell").setOrigin(0, 0);
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
