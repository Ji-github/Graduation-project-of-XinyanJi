const BindUser = require('../models/BindUser');

const getbindList = async function() {
    const {count, rows} = await BindUser.findAndCountAll({
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


module.exports = { getbindList };