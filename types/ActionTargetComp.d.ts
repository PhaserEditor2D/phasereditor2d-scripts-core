import ScriptNode from "./ScriptNode";
export default class ActionTargetComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): ActionTargetComp;
    private gameObject;
    target: "GAME_OBJECT" | "ARG_1" | "ARG_2" | "ARG_3" | "ARG_4" | "ARG_5" | "ARG_6" | "ARG_7" | "ARG_8";
    targetName: string;
    static getTargetGameObject(scriptNode: ScriptNode, args: any[]): any;
}
