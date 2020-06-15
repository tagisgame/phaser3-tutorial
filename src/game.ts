import 'phaser';
import Scene1 from './Scene1';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: Scene1
};

const game = new Phaser.Game(config);
