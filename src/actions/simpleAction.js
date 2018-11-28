import { SIMPLE_ACTION } from "./actionTypes";

export const simpleAction = () => {
	dispatchEvent({
		type: SIMPLE_ACTION,
		payload: "result_of_simple_action"
	});
};
