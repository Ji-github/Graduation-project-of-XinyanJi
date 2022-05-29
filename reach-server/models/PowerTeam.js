// 权限-团队
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const PowerTeam = sequelize.define('PowerTeam', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    remark: {
        type: DataTypes.STRING
    },
    insert_time: {
        type: DataTypes.STRING,
        defaultValue: Date.now()
    },
    update_time: {
        type: DataTypes.STRING,
        defaultValue: Date.now()
    },
    is_delete: {
        type: DataTypes.INTEGER(1)
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = PowerTeam;