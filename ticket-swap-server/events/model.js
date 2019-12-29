const Sequelize = require("sequelize");
const sequelize = require("../db");

const Event = sequelize.define("event", {
  // id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(500),
    allowNull: false
  },
  urlLogo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => Event.truncate())
  .then(() =>
    Event.create({
      title: "Exhibition Maps & Marvels",
      description:
        "In the first part of the exhibition the centuries-old maps transport visitors to the locations that shaped Dutch history: South Africa, Indonesia, Japan, Australia, and Brazil. The second part looks at the so-called ‘cabinet of curiosities’: a treasure trove of eye-catching objects brought from far-off lands to Europe, literally bringing the unknown world into people's homes.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2019-12-29"),
      endDate: new Date("2019-12-30")
    })
  )
  .then(() =>
    Event.create({
      title: "Humania",
      description:
        "If you’ve ever wanted hands-on insight into the wonder of humankind, then Humania at NEMO is where you’ll want to head. This new exhibition considers human attraction, how the body is constructed, and how it changes as it ages. Interactive elements put you to work and include both physical and mental challenges. An in-depth look at biology, sociology and psychology reveals who we are, what our differences are, and how we’re alike.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-10-20"),
      endDate: new Date("2020-10-20")
    })
  )
  .then(() =>
    Event.create({
      title: "Children's Games",
      description:
        "Eye Filmmuseum presents Children’s Games, a series of scenes of children at play around the world. Known for his playful approach to art, Francis Alÿs’s engaging ongoing series shows how children’s creative spirit can turn simple, ordinary things into unlikely and fantastical universes.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-09-30"),
      endDate: new Date("2020-09-30")
    })
  )
  .then(() =>
    Event.create({
      title: "Fashion on the ration",
      description:
        "This exhibition explores how fashion changed during the Second World War as a result of shortages. As early as 1940, clothes rationing was in place as textiles became scarce under German Occupation. As a result, women used second-hand men’s suits to create their own suits, skirts became shorter to save fabric and dresses were made using a mix of materials.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-07-18"),
      endDate: new Date("2020-07-18")
    })
  )
  .then(() =>
    Event.create({
      title: "On the street",
      description:
        "Oba brings into focus just what has happened in the past 100 years since women began to fight for their right to vote. Through archival photographs, publications and other material from Atria’s archive, the exhibition brings to life the struggles activists faced and their move to the streets in search of a fair and better future. It’s in Dutch but there are English translations available.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-05-04"),
      endDate: new Date("2020-05-04")
    })
  )
  .then(() =>
    Event.create({
      title: "Light Festival",
      description:
        "Amsterdam is set aglow during the Amsterdam Light Festival, when artists from around the world are given the chance to create elaborate light displays along the city's iconic canals.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-03-27"),
      endDate: new Date("2020-03-27")
    })
  )
  .then(() =>
    Event.create({
      title: "Intimate Audrey",
      description:
        "Audrey Hepburn, one of the most iconic women of the 20th century, is the focus of this lovingly created exhibition. Curated by her son, Sean Hepburn Ferrer, this multi-layered homecoming exhibition considers Audrey’s life as a young girl, a wife and a mother with an emphasis on the woman behind the legend.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-04-18"),
      endDate: new Date("2020-04-18")
    })
  )
  .then(() =>
    Event.create({
      title: "Rembrandt lives on",
      description:
        "350 years after his death, Rembrandt is as alive as ever in Amsterdam, the city that inspired his creative passion and continues to influence generations of artists.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-01-30"),
      endDate: new Date("2020-01-30")
    })
  )
  .then(() =>
    Event.create({
      title: "More about De Plantage ",
      description:
        "Find out more about De Plantage, where urban sprawl meets the natural world in the city centre.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-02-24"),
      endDate: new Date("2020-02-24")
    })
  )
  .then(() =>
    Event.create({
      title: "Republic at Sea ",
      description:
        "The exhibition Republic at Sea explains how the Netherlands came to be a maritime nation, and tells the story of the Republic in the seventeenth and eighteenth centuries through more than 50 masterpieces.",
      urlLogo:
        "https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf",
      startDate: new Date("2020-06-15"),
      endDate: new Date("2020-06-15")
    })
  )

  .then(movie => {
    console.log(movie.toJSON());
  })
  .catch(error => console.log(error));

module.exports = Event;
