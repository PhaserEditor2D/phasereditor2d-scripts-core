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
	public target: "GAME_OBJECT"|"ARG_1"|"ARG_2"|"ARG_3"|"ARG_4"|"ARG_5"|"ARG_6"|"ARG_7"|"ARG_8" = "GAME_OBJECT";
	public targetName: string = "";

	/* START-USER-CODE */

	static getTargetGameObject(scriptNode: ScriptNode, args: any[]) {

		const comp = ActionTargetComp.getComponent(scriptNode);

		if (comp) {

			switch (comp.target) {

				case "GAME_OBJECT":

					return scriptNode.gameObject;

				case "ARG_1":

					return args[0];

				case "ARG_2":

					return args[1];

				case "ARG_3":

					return args[2];

				case "ARG_4":

					return args[3];

				case "ARG_5":

					return args[4];

				case "ARG_6":

					return args[5];

				case "ARG_7":

					return args[6];

				case "ARG_8":

					return args[7];
			}
		}

		return scriptNode.gameObject;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
