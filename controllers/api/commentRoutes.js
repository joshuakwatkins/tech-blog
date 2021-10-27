const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  const url = window.location.pathname;
  try {
    const newComment = await Comment.create({
      title: req.body.title,
      body: req.body.body,
      blog_id: url.substring(url.lastIndexOf("/") + 1),
      user_id: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
