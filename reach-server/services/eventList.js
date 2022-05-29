const EventList = require('../models/EventList');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

const EventListInsert = async function (params) {
    const ins = await EventList.create(params);
    return ins.toJSON();
}

const EventListDelete = async function(id) {
    const ins = await EventList.findByPk(id);
    ins.is_delete = 1;
    ins.save();
    return ins.toJSON();
}

const EventListUpdate = async function(id, params) {
    await EventList.update(params, {
        where: {
            id,
        }
    })
}

const EventListInfo = async function(id) {
    const ins = await EventList.findByPk(id);
    return ins.toJSON();
}

const EventListList = async function(params) {
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
    const {count, rows} = await EventList.findAndCountAll({
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


module.exports = { EventListInsert, EventListDelete, EventListUpdate, EventListInfo, EventListList };