const { lowCap } = require('./utils');

function importState(str) {
    const { low, cap } = lowCap(str);
    return `import { ${cap}State, ${cap}Actions, ${cap}Reducer } from './${low}';`;
}

function stateState(str) {
    const { low, cap } = lowCap(str);
    return `${low}: ${cap}State;`;
}

function actionState(str) {
    const { low, cap } = lowCap(str);
    return `${low}: ${cap}Actions;`;
}

function reducerState(str) {
    const { low, cap } = lowCap(str);
    return `${low}: ${cap}Reducer,`;
}

function init(states) {
    return `import { combineReducers, createStore } from 'redux';
${states.map(importState).join('\n')}

export interface AppState {
    ${states.map(stateState).join('\n\t')}
}

export interface AppActions {
    ${states.map(actionState).join('\n\t')}
}

const store = createStore(
    combineReducers({
        ${states.map(reducerState).join('\n\t\t')}
    })
);

export default store;
    `;
}

module.exports = init;
