
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import ScriptNode from "./ScriptNode";
/* END-USER-IMPORTS */

export default class AssignOpComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__AssignOpComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): AssignOpComp {
		return (gameObject as any)["__AssignOpComp"];
	}

	private gameObject: any;
	public operator: "="|"+="|"*=" = "=";

	/* START-USER-CODE */

	static computeValue(node: ScriptNode, oldValue: number, newValue: number) {

		const comp = AssignOpComp.getComponent(node);

		if (comp) {

			switch (comp.operator) {

				case "+=":

					return oldValue + newValue;

				case "*=":

					return oldValue * newValue;

				default:

					return newValue;
			}
		}

		return newValue;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
