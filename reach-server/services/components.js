const Components = require('../models/Components');

const componentSave = async function (params) {
    const ins = await Components.create(params);
    return ins.toJSON();
}

const componentsInfo = async function(id) {
    const ins = await Components.findByPk(id);
    return ins.toJSON();
}

const componentsUpdate = async function(id, params) {
    await Components.update(params, {
        where: {
            id,
        }
    })
}

const componentsList = async function(params) {
    const page_num = params.page_num || 1;
    const page_size = params.page_size || 10;
    if(params.page_num) {
        delete params.page_num;
    }
    if(params.page_size) {
        delete params.page_size;
    }
    const {count, rows} = await Components.findAndCountAll({
        where: params,
        offset: (page_num - 1) * page_size,
        limit: +page_size
    });
    const data = JSON.parse(JSON.stringify(rows)).filter((item) => {
        return !item.is_delete;
    })
    return {
        count,
        rows: data
    }
}


module.exports = { componentSave, componentsUpdate, componentsInfo, componentsList };