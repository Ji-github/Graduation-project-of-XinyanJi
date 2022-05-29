const PowerTeam = require('../models/PowerTeam');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;

const powerTeamInsert = async function (params) {
    const ins = await PowerTeam.create(params);
    return ins.toJSON();
}

const powerTeamDelete = async function(id) {
    const ins = await PowerTeam.findByPk(id);
    ins.is_delete = 1;
    ins.save();
    return ins.toJSON();
}

const powerTeamUpdate = async function(id, params) {
    const ins = await PowerTeam.update(params, {
        where: {
            id,
        }
    })
}

const powerTeamInfo = async function(id) {
    const ins = await PowerTeam.findByPk(id);
    return ins.toJSON();
}

const powerTeamList = async function(params) {
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
    const {count, rows} = await PowerTeam.findAndCountAll({
        where: params,
        offset: (page_num - 1) * page_size,
        limit: +page_size
    });
    return {
        count,
        rows: JSON.parse(JSON.stringify(rows))
    }
}


module.exports = { powerTeamInsert, powerTeamDelete, powerTeamUpdate, powerTeamInfo, powerTeamList };