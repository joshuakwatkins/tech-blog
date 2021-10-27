const { DataTypes, Model } = require("sequelize");
const { User, Blog } = require("../config");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Blog,
        key: id,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: id,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);
