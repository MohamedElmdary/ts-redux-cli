const { lowCap } = require('./utils');

function reducer(state) {
    const { cap } = lowCap(state);

    return `import { ${cap}Actions } from './types';
import { ${cap}State } from './types';

const initState: ${cap}State = {
    state1: '',
    state2: -1
};

function ${cap}Reducer(previousState = initState, action: ${cap}Actions) {
    const state = { ...previousState };

    switch (action.type) {
        case 'DEFAULT_ACTION_1':
            state.state1 = action.payload;
            return state;

        case 'DEFAULT_ACTION_2':
            state.state2 = action.payload;
            return state;

        default:
            return previousState;
    }
}

export { ${cap}Reducer };
    `;
}

module.exports = reducer;
