import 'phaser';

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
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

function preload() {
    this.load.image('kyara', 'assets/nazokyara.png')
}
function create() {
    this.kyara = this.physics.add.sprite(100, 100, 'kyara');
}
function update() {}

const game = new Phaser.Game(config);
