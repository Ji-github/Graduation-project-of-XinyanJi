// 事件列表模型
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const PowerList = sequelize.define("PowerList", {
    label: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = PowerList;