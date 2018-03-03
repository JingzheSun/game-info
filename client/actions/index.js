import * as async from './asyncActions.js';
import * as auth from './authActions.js';
import * as UI from './UIActions.js';

const actions = {
	...async,
	...auth,
	...UI
}

for (let f in actions){
	module.exports[f] = actions[f]
}