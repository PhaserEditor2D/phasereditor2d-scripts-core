import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class StartSceneActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    sceneKey: string;
    execute(...args: any[]): void;
}
