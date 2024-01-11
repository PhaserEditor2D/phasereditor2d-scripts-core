import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
export default class SpawnActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    objectPrefab: any;
    spawnInParentPosition: boolean;
    execute(...args: any[]): void;
}
