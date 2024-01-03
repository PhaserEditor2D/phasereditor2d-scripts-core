import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class SetXActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    x: number;
    execute(...args: any[]): void;
}
