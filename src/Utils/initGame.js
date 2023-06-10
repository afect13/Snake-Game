export function initGame() {
  this.movement = "start";
  // Флаг от многократного нажатия (змея совершает самоубийство)
  this.prevMovement = "start";
  this.snakeCells = [];
  this.appleCells = [];
  this.keyboard = this.input.keyboard.createCursorKeys();
  this.add.image(0, 0, "background").setOrigin(0, 0);
  this.themeSound = this.sound.add("theme", { loop: true });
  this.hitSound = this.sound.add("hit");
  this.eatSound = this.sound.add("eat");
  this.themeSound.play();
}
