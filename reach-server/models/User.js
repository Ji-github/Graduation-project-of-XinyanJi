// 用户登陆
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Admin = sequelize.define('User', {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    is_delete: {
        type: DataTypes.INTEGER(1)
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = Admin;