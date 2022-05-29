const PowerUser = require('../models/PowerUser');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

const powerUserInsert = async function (params) {
    const ins = await PowerUser.create(params);
    return ins.toJSON();
}

const powerUserDelete = async function(id) {
    const ins = await PowerUser.findByPk(id);
    ins.is_delete = 1;
    ins.save();
    return ins.toJSON();
}

const powerUserUpdate = async function(id, params) {
    const ins = await PowerUser.update(params, {
        where: {
            id,
        }
    })
}

const powerUserInfo = async function(id) {
    const ins = await PowerUser.findByPk(id);
    const result = ins.toJSON();
    result.roles = result.roles.split(',');
    return result;
}

const powerUserSearch = async function(name) {
    const ins = await PowerUser.findOne({
        name
    });
    return ins.toJSON();
}

const powerUserList = async function(params) {
    console.log(params);
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
    const {count, rows} = await PowerUser.findAndCountAll({
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


module.exports = { powerUserInsert, powerUserDelete, powerUserSearch, powerUserUpdate, powerUserInfo, powerUserList };