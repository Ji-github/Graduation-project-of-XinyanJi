const Business = require('../models/Business');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

const powerBusinessInsert = async function (params) {
    const ins = await Business.create(params);
    return ins.toJSON();
}

const powerBusinessDelete = async function(id) {
    const ins = await Business.findByPk(id);
    ins.is_delete = 1;
    ins.save();
    return ins.toJSON();
}

const powerBusinessUpdate = async function(id, params) {
    const ins = await Business.update(params, {
        where: {
            id,
        }
    })
}

const powerBusinessInfo = async function(id) {
    const ins = await Business.findByPk(id);
    return ins.toJSON();
}

const powerBusinessSearch = async function(name) {
    const ins = await Business.findOne({
        name
    });
    return ins.toJSON();
}

const powerBusinessList = async function(params) {
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
    const {count, rows} = await Business.findAndCountAll({
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


module.exports = { powerBusinessInsert, powerBusinessDelete, powerBusinessSearch, powerBusinessUpdate, powerBusinessInfo, powerBusinessList };