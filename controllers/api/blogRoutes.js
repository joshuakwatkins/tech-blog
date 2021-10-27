const router = require("express").Router();
const { Blog } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const blogEdit = await Blog.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!blogEdit) {
      res.status(404).json({ message: "No blog found with that ID " });
    } else {
      res.status(200).json(blogEdit);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteBlog = Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteBlog) {
      res.status(404).json({ message: "No blog found with that ID " });
    } else {
      res.status(200).json(deleteBlog);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
