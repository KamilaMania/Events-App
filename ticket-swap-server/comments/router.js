const { Router } = require("express");
const Comment = require("./model");
const router = new Router();

router.get("/comments/:ticketId", (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;
  Comment.findAndCountAll({
    where: {
      ticketId: req.params.ticketId
    },
    limit,
    offset
  })
    .then(comments => res.send({ data: comments.rows, total: comments.count }))
    .catch(next);
});
router.post("/comment", (req, res, next) => {
  Comment.create(req.body)
    .then(comment => res.send(comment))
    .catch(next);
});

router.get("/comment/:id", (req, res, next) => {
  Comment.findByPk(req.params.id)
    .then(comment => res.send(comment))
    .catch(next);
});

router.put("/comment/:id", (req, res, next) => {
  Comment.findByPk(req.params.id)
    .then(comment => comment.update(req.body))
    .then(comment => res.send(comment))
    .catch(next);
});

module.exports = router;
