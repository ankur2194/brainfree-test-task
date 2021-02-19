const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Horse = sequelize.define('horse', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY
    },
    gender: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pregnant: {
        type: DataTypes.BOOLEAN
    },
    due_date: {
        type: DataTypes.DATEONLY
    }
});

module.exports = Horse;