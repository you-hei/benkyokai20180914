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
const WALL_COLOR = 0x55cc44;
const genRectData = (x, y, width, height) => ({ x, y, width, height });
const wallRectArray = [
    genRectData(40, 0, 40, 400),
    genRectData(80, 360, 280, 40),
    genRectData(120, 0, 40, 300),
    genRectData(240, 0, 40, 160),
    genRectData(240, 200, 40, 260),
    genRectData(160, 440, 40, 160),
    genRectData(200, 520, 240, 40),
    genRectData(0, 500, 100, 40),
    genRectData(440, 300, 40, 260),
    genRectData(280, 200, 240, 40),
    genRectData(360, 60, 40, 240),
    genRectData(580, 200, 160, 40),
    genRectData(580, 240, 40, 240),
    genRectData(500, 50, 240, 100),
];
function create() {
    const walls = wallRectArray.map((data) => {
        const wall = this.add.graphics();
        wall.fillStyle(WALL_COLOR);
        wall.fillRect(data.x, data.y, data.width, data.height);
        return wall
    });

    this.kyara = this.physics.add.sprite(0, 0, 'kyara').setOrigin(0, 0);
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
