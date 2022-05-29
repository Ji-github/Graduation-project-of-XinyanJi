// 权限-用户
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const PowerUser = sequelize.define('PowerUser', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    team_names: {
        type: DataTypes.STRING
    },
    roles: {
        type: DataTypes.STRING
    },
    opuser: {
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

module.exports = PowerUser;