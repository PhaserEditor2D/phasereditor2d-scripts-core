import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class SetScaleYActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    scaleY: number;
    execute(...args: any[]): void;
}
