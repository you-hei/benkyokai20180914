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
    this.cursors = this.input.keyboard.createCursorKeys();
}
function update() {
    this.kyara.setVelocity(0, 0);
    if (this.cursors.right.isDown) {
        this.kyara.setVelocityX(100);
    } else if (this.cursors.left.isDown) {
        this.kyara.setVelocityX(-100);
    }
    if (this.cursors.up.isDown) {
        this.kyara.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
        this.kyara.setVelocityY(100);
    }
}

const game = new Phaser.Game(config);
