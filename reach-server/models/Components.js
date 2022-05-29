const sequelize = require('./db');
const {Sequelize} = require('sequelize');
const {DataTypes} = require('sequelize');

const Components = sequelize.define("Components", {
    name: {
        type: DataTypes.STRING
    },
    data_schema: {
        type: DataTypes.TEXT('long')
    },
    description: {
        type: DataTypes.STRING
    },
    render_schema: {
        type: DataTypes.TEXT('long')
    },
    uname: {
        type: DataTypes.STRING
    },
    is_delete: {
        type: DataTypes.INTEGER(1)
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = Components;