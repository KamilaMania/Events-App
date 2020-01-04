const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
sequelize
  .sync()
  .then(() => User.truncate())
  .then(() =>
    User.create({
      email: "a@a",
      password: "a"
    })
  )
  .then(ticket => {
    console.log(ticket.toJSON());
  })
  .catch(error => console.log(error));
module.exports = User;
