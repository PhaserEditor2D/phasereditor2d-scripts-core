import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class FlipActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    horizontal: boolean;
    vertical: boolean;
    execute(...args: any[]): void;
}
