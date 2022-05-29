const PowerList = require('../models/PowerList');

const getPowerList = async function() {
    const {count, rows} = await PowerList.findAndCountAll({
        offset: 0,
        limit: 999
    });
    const data = JSON.parse(JSON.stringify(rows)).filter((item) => {
        return !item.is_delete;
    })
    return {
        rows: data
    }
}


module.exports = { getPowerList };