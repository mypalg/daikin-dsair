let buf = Buffer.from('05000502000304312d303106e9a490e58e8505352e706e67010017000000010004312d303104312d303103000304312d303206e5aea2e58e8505322e706e67010017000000010004312d303204312d303204000304312d303306e5aea2e58da705312e706e67010017000000010004312d303304312d303305000304312d303406e4b8bbe58da705302e706e67010017000000010004312d303404312d303406000304312d303506e4b9a6e688bf05332e706e67010017000000010004312d303504312d3035', 'hex');

const Param = require('../recv/get-room-info');
let param = new Param(buf, {subbodyVer: 1});

console.log(JSON.stringify(param, null, 4));