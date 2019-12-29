const Sequelize = require("sequelize");
const sequelize = require("../db");

const Comment = sequelize.define("comment", {
  commentText: {
    type: Sequelize.STRING(500),
    allowNull: false
  }
});

module.exports = Comment;
