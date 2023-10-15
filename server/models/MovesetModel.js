const { DataTypes } = require("sequelize");

const MovesetModel = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hitCount: {
        type: DataTypes.INTEGER
    },
    hitLocation: {
        type: DataTypes.STRING
    },
    test: {
        type: DataTypes.BOOLEAN
    }
};

module.exports = {
    init: (sequelize, dbTableName = "testing") => {
        this.model = sequelize.define(`${dbTableName}`, MovesetModel);
    },
    createMoveset: (moveset) => {
        return this.model.create(moveset);
    }
};