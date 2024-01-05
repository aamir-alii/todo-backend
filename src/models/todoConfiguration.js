"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TodoConfiguration extends Model {
    static associate(models) {
      // define association here
    }
  }
  TodoConfiguration.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      status: {
        type: DataTypes.ENUM("Completed", "Pending"),
        defaultValue: "Pending",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TodoConfiguration",
    }
  );
  return TodoConfiguration;
};
