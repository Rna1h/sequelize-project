const { City } = require('./src/model/index');

async function test() {
    const val = await City.findAll();
    console.log(val)
}

test()