import Phaser from "phaser";
export default class UserComponent {
    /**
     * @param gameObject The entity.
     */
    constructor(gameObject: Phaser.GameObjects.GameObject);
    scene: Phaser.Scene;
    protected awake(): void;
    protected start(): void;
    protected update(): void;
    protected destroy(): void;
}
