const fs = require('fs');
const path = require('path');
const types = require('./types');
const reducer = require('./reducer');
const { storePath } = require('./utils');

const indexFile = `export * from './types';
export * from './reducer';
`;

function createState(state) {
    fs.mkdirSync(path.join(storePath, state));
    fs.writeFileSync(path.join(storePath, state, 'types.ts'), types(state));
    fs.writeFileSync(path.join(storePath, state, 'reducer.ts'), reducer(state));
    fs.writeFileSync(path.join(storePath, state, 'index.ts'), indexFile);
}

module.exports = createState;
