import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class SetAngleActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    angle: number;
    execute(...args: any[]): void;
}
