const { Router } = require("express");
const Comment = require("./model");
const router = new Router();

router.get("/comments", (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;
  Comment.findAndCountAll({ limit, offset })
    .then(comments => res.send({ data: comments.rows, total: comments.count }))
    .catch(next);
});
router.post("/comment", (req, res, next) => {
  Comment.create(req.body)
    .then(event => res.send(event))
    .catch(next);
});

router.get("/comment/:id", (req, res, next) => {
  Comment.findByPk(req.params.id)
    .then(comment => res.send(comment))
    .catch(next);
});

router.put("/comment/:id", (req, res, next) => {
  Comment.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next);
});

router.delete("/comment/:id", (req, res, next) => {
  Comment.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(next);
});

module.exports = router;
