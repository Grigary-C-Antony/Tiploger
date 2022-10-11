const { DataTypes } = require("sequelize");

const tip_details = (sequelize) => {
  sequelize.define(
    "tip_details",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imagelist: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
};
const user_details = (sequelize) => {
  sequelize.define(
    "user_details",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profileLink: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
};
const likes = (sequelize) => {
  sequelize.define(
    "likes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      like: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
};
const tip_type = (sequelize) => {
  sequelize.define(
    "tip_type",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );
};
module.exports = {
  tip_details,
  user_details,
  likes,
  tip_type,
};
