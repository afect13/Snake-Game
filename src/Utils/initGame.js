export function initGame() {
  this.movement = "start";
  this.prevMovement = "start";
  this.snakeCells = [];
  this.appleCells = [];
  this.keyboard = this.input.keyboard.createCursorKeys();
  this.add
    .image(
      (this.sys.game.config.width - this.textures.get("background").source[0].width) / 2,
      (this.sys.game.config.height - this.textures.get("background").source[0].height) / 2,
      "background"
    )
    .setOrigin(0, 0);
  this.themeSound = this.sound.add("theme", { loop: true });
  this.hitSound = this.sound.add("hit");
  this.eatSound = this.sound.add("eat");
  this.themeSound.play();
}
