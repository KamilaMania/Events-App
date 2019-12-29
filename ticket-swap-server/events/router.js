const { Router } = require("express");
const Event = require("./model");
const router = new Router();

router.get("/events", (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;
  Event.findAndCountAll({ limit, offset })
    .then(events => res.send({ data: events.rows, total: events.count }))
    .catch(next);
});
router.post("/event", (req, res, next) => {
  Event.create(req.body)
    .then(event => res.send(event))
    .catch(next);
});

router.get("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => res.send(event))
    .catch(next);
});

router.put("/event/:id", (req, res, next) => {
  Event.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next);
});

router.delete("/event/:id", (req, res, next) => {
  Event.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(next);
});

module.exports = router;
