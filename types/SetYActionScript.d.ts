import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class SetYActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    y: number;
    execute(...args: any[]): void;
}
