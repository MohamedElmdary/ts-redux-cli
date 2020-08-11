const path = require('path');

function capitalize(str) {
    let c = str.slice(0, 1);
    c = c.toLocaleUpperCase();
    return c + str.slice(1);
}

function lowCap(str) {
    const low = str.toLocaleLowerCase();
    const cap = capitalize(low);
    return { low, cap };
}

const storePath = path.join(process.cwd(), 'src', 'store');

module.exports = {
    capitalize,
    lowCap,
    storePath,
};
