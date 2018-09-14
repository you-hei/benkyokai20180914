export default class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TitleScene' });
    }
    create() {
        this.titleText = this.add.text(60, 240, 'HYPER MEIRO', { fontSize: '100px', fill: '#ffffff' });
        this.key = this.input.keyboard.createCursorKeys();
    }
    update() {
        if (this.key.space.isDown) {
            this.scene.start('GameScene');
        }
    }
}
