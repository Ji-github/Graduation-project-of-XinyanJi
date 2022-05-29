// 事件列表模型
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const BindUser = sequelize.define("BindUser", {
    label: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = BindUser;