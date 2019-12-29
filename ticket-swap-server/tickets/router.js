const { Router } = require("express");
const Ticket = require("./model");
const router = new Router();

router.get("/ticket", (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;
  Ticket.findAndCountAll({ limit, offset })
    .then(tickets => res.send({ data: tickets.rows, total: tickets.count }))
    .catch(next);
});
router.post("/ticket", (req, res, next) => {
  Ticket.create(req.body)
    .then(event => res.send(event))
    .catch(next);
});

router.get("/ticket/:key", (req, res, next) => {
  Event.findByPk(req.params.key)
    .then(ticket => res.send(ticket))
    .catch(next);
});

router.put("/ticket/:key", (req, res, next) => {
  Event.findByPk(req.params.key)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next);
});

router.delete("/ticket/:key", (req, res, next) => {
  Event.destroy({ where: { key: req.params.key } })
    .then(number => res.send({ number }))
    .catch(next);
});

module.exports = router;
