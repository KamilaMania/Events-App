const Sequelize = require("sequelize");
const sequelize = require("../db");

const Comment = sequelize.define("comment", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  commentText: {
    type: Sequelize.STRING(500),
    allowNull: false
  }
});

module.exports = Comment;
