#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const init = require('./init');
const createState = require('./createState');
const { storePath } = require('./utils');
const reducer = require('./reducer');

async function main() {
    const { command } = await inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose the require command:',
            name: 'command',
            default: 'Init',
            choices: ['init', 'create new state directory'],
        },
    ]);

    if (command === 'init') {
        const states = ['todos', 'counter'];

        if (!fs.existsSync(storePath)) {
            fs.mkdirSync(storePath);
            fs.writeFileSync(path.join(storePath, 'index.ts'), init(states));
            states.forEach(createState);
        }
    }

    if (command === 'create new state directory') {
        const { state } = await inquirer.prompt([
            {
                message: 'new state name ? ',
                name: 'state',
            },
        ]);

        if (!fs.existsSync(storePath)) {
            throw new Error('store directory is not init yet!');
        }

        createState(state);
    }
}

main();
