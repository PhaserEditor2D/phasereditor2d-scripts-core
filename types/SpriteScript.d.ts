import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class SpriteScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    get gameObject(): Phaser.GameObjects.Sprite;
}
