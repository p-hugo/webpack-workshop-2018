// CommonJS Named Exports
const monsterOne = "Demigorgon attacks town.";
const monsterTwo = "Dragon attacks town.";
const makeMonster = monsterName => `${monsterName} attacks town.`;

exports.monsterOne = monsterOne;
exports.monsterTwo = monsterTwo;
exports.makeMonster = makeMonster;