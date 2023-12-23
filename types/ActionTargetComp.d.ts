import ScriptNode from "./ScriptNode";
export default class ActionTargetComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): ActionTargetComp;
    private gameObject;
    target: "GAME_OBJECT" | "ARG_0" | "ARG_1" | "ARG_2";
    targetName: string;
    static getTargetGameObject(scriptNode: ScriptNode, args: any[]): any;
}
