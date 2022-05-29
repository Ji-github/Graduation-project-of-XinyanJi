// 权限-接口权限
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const PowerInterface = sequelize.define('PowerInterface', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: {
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
    powerids: {
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

module.exports = PowerInterface;