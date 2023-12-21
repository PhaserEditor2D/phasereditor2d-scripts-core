// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import ScriptNode from "./ScriptNode";
/* END-USER-IMPORTS */

export default class ActionTargetComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__ActionTargetComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): ActionTargetComp {
		return (gameObject as any)["__ActionTargetComp"];
	}

	private gameObject: any;
	public target: "GAME_OBJECT"|"ARG_0"|"ARG_1"|"ARG_2" = "GAME_OBJECT";

	/* START-USER-CODE */

	static getTargetGameObject(scriptNode: ScriptNode, args: any[]) {

		const comp = ActionTargetComp.getComponent(scriptNode);

		if (comp) {

			switch(comp.target) {

				case "GAME_OBJECT":

					return scriptNode.gameObject;

				case "ARG_0":

					return args[0];

				case "ARG_1":

					return args[1];

				case "ARG_2":

					return args[2];
			}
		}

		return scriptNode.gameObject;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
