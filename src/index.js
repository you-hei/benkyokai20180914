import 'phaser';
import GameScene from './scene/GameScene';
import TitleScene from './scene/TitleScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scene: [TitleScene],
};

const game = new Phaser.Game(config);
