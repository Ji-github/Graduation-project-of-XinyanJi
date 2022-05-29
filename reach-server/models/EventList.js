// 事件列表模型
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const EventList = sequelize.define("EventList", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isTest: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    insert_time: {
        type: DataTypes.STRING,
        defaultValue: Date.now()
    },
    status: {
        type: DataTypes.INTEGER
    },
    category: {
        type: DataTypes.STRING
    },
    update_time: {
        type: DataTypes.STRING,
        defaultValue: Date.now()
    },
    cardId: {
        type: DataTypes.INTEGER
    },
    component_conf: {
        type: DataTypes.TEXT('long')
    },
    query: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_delete: {
        type: DataTypes.INTEGER(1)
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = EventList;