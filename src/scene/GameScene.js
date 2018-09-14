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
const onGoal = () => {
    console.log('goooooooooaaaaal!!!!!!');
    this.clearText.setVisible(true);
    this.scene.pause();
};

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene',
        });
    }

    preload() {
        this.load.image('kyara', 'assets/nazokyara.png');
        this.load.image('kabe', 'assets/kabe.png');
        this.load.image('goal', 'assets/goal.png');
    }

    create() {
        this.kabe = this.physics.add.staticGroup();
        wallRectArray.forEach((wallRect) => {
            const widthCount = Math.floor(wallRect.width / 32);
            const heightCount = Math.floor(wallRect.height / 32);
            for (let i = 0; i < widthCount; i++) {
                for (let j = 0; j < heightCount; j++) {
                    const x = wallRect.x + (i * 32);
                    const y = wallRect.y + (j * 32);
                    this.kabe.create(x, y, 'kabe').setOrigin(0, 0);
                }
            }
        });

        this.goal = this.physics.add.sprite(82, 0, 'goal').setOrigin(0, 0);

        this.kyara = this.physics.add.sprite(0, 0, 'kyara').setOrigin(0, 0);

        this.physics.add.collider(this.kyara, this.kabe);

        this.physics.add.overlap(this.kyara, this.goal, onGoal, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.clearText = this.add.text(360, 260, 'クリアー', { fontSize: '80px', fill: '#ffffff' });
        this.clearText.setVisible(false);
    }

    update() {
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
}
