const { lowCap } = require('./utils');

function types(state) {
    const { cap } = lowCap(state);

    return `export interface ${cap}State {
    state1: string;
    state2: number;
}

export interface DefaultAction1 {
    type: 'DEFAULT_ACTION_1';
    payload: string;
}

export interface DefaultAction2 {
    type: 'DEFAULT_ACTION_2';
    payload: number;
}

/**
 *
 */
export type ${cap}Actions = DefaultAction1 | DefaultAction2;
    `;
}

module.exports = types;
