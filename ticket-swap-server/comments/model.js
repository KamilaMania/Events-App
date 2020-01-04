const Sequelize = require("sequelize");
const sequelize = require("../db");

const Comment = sequelize.define("comment", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  ticketId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING(500),
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => Comment.truncate())
  .then(() =>
    Comment.create({
      userId: 1,
      ticketId: 1,
      content:
        "If you’ve ever wanted hands-on insight into the wonder of humankind, then Humania "
    })
  )
  .then(() =>
    Comment.create({
      userId: 1,
      ticketId: 1,
      content:
        "If you’ve ever wanted hands-on insight into the wonder of humankind, then Humania "
    })
  )
  .then(() =>
    Comment.create({
      userId: 1,
      ticketId: 1,
      content:
        "If you’ve ever wanted hands-on insight into the wonder of humankind, then Humania "
    })
  )
  .then(() =>
    Comment.create({
      userId: 1,
      ticketId: 1,
      content:
        "If you’ve ever wanted hands-on insight into the wonder of humankind, then Humania "
    })
  )
  .then(comment => {
    console.log(comment.toJSON());
  })
  .catch(error => console.log(error));

module.exports = Comment;
