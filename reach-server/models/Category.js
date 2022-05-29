// 类目模型
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Category = sequelize.define("Category", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_delete: {
        type: DataTypes.INTEGER(1)
    },
    bindEvent: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = Category;