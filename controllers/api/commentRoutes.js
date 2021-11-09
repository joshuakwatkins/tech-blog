const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    console.log(
      "testing at the post route for comments ======================================="
    );
    const newComment = await Comment.create({
      body: req.body.body,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
