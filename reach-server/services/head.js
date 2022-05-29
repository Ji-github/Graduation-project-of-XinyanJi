const Head = require('../models/Head');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

const HeadInsert = async function (params) {
    params.dataSource = params.dataSource.join(',');
    const ins = await Head.create(params);
    return ins.toJSON();
}

const HeadDelete = async function(id) {
    const ins = await Head.findByPk(id);
    ins.is_delete = 1;
    ins.save();
    return ins.toJSON();
}

const HeadUpdate = async function(id, params) {
    params.dataSource = params.dataSource.join(',');
    await Head.update(params, {
        where: {
            id,
        }
    })
}

const HeadInfo = async function(id) {
    const ins = await Head.findByPk(id);
    const result = ins.toJSON();
    result.dataSource = result.dataSource.split(',');
    return result;
}

const HeadList = async function(params) {
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
    const {count, rows} = await Head.findAndCountAll({
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


module.exports = { HeadInsert, HeadDelete, HeadUpdate, HeadInfo, HeadList };