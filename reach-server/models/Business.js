const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Business = sequelize.define("Business", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    remark: {
        type: DataTypes.STRING
    },
    identify: {
        type: DataTypes.STRING
    },
    default_power: {
        type: DataTypes.INTEGER
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

module.exports = Business;