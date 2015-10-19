var PhaserDemo = (function () {
    function PhaserDemo() {
        this.game = new Phaser.Game(800, 400, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    PhaserDemo.prototype.preload = function () {
        this.game.load.image('phaser_run', 'images/run.png');
    };
    PhaserDemo.prototype.create = function () {
        var logo = this.game.add.sprite(0, 0, 'phaser_run');
        logo.anchor.setTo(0.2, 0);
    };
    return PhaserDemo;
})();
window.onload = function () {
    var game = new PhaserDemo();
};
//# sourceMappingURL=app.js.map