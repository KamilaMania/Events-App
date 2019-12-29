const Sequelize = require("sequelize");
const sequelize = require("../db");

const Ticket = sequelize.define("ticket", {
  // id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  urlLogo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(500),
    allowNull: false
  },
  commentText: {
    type: Sequelize.STRING(500),
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => Ticket.truncate())
  .then(() =>
    Ticket.create({
      name: "",
      urlLogo:
        "https://i.pinimg.com/236x/5b/c0/cb/5bc0cba5c9fe477b8bf602d08c5d6a38.jpg",
      description: "This is your personal ticket for that event",
      price: 13.3,
      commentText: ""
    })
  )

  .then(ticket => {
    console.log(ticket.toJSON());
  })
  .catch(error => console.log(error));

module.exports = Ticket;
