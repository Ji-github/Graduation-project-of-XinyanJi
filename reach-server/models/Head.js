// 事件列表模型
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Head = sequelize.define("Head", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataSource: {
        type: DataTypes.STRING,
        allowNull: false
    },
    insert_time: {
        type: DataTypes.STRING,
        defaultValue: Date.now()
    },
    update_time: {
        type: DataTypes.STRING,
        defaultValue: Date.now()
    },
    create_time: {
        type: DataTypes.STRING,
        defaultValue: Date.now()
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = Head;