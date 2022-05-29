
const PowerInterface = require('../models/PowerInterface');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

const PowerInterfaceInsert = async function (params) {
    const ins = await PowerInterface.create(params);
    return ins.toJSON();
}

const PowerInterfaceDelete = async function(id) {
    const ins = await PowerInterface.findByPk(id);
    ins.is_delete = 1;
    ins.save();
    return ins.toJSON();
}

const PowerInterfaceUpdate = async function(id, params) {
    const ins = await PowerInterface.update(params, {
        where: {
            id,
        }
    })
}

const PowerInterfaceInfo = async function(id) {
    const ins = await PowerInterface.findByPk(id);
    const result = ins.toJSON();
    result.powerids = result.powerids.split(',');
    return result;
}

const PowerInterfaceList = async function(params) {
    const page_num = params.page_num || 1;
    const page_size = params.page_size || 10;
    if(params.page_num) {
        delete params.page_num;
    }
    if(params.page_size) {
        delete params.page_size;
    }
    if(params.insert_time && params.update_time) {
        params.update_time = {
            [Op.between]: [params.insert_time, params.update_time]
        }
        delete params.insert_time;
    }
    const {count, rows} = await PowerInterface.findAndCountAll({
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


module.exports = { PowerInterfaceInsert, PowerInterfaceDelete, PowerInterfaceUpdate, PowerInterfaceInfo, PowerInterfaceList };