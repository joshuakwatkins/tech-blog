const router = require("express").Router();
const { Blog, Comment } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const blogsPrint = blogs.map((blog) => blog.get({ plain: true }));

    const comments = await Comment.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const commentsPrint = comments.map((comment) =>
      comment.get({ plain: true })
    );

    res.render("dashboard", {
      blogsPrint,
      commentsPrint,
    });
  } catch (err) {
    res.status(500).json(err).redirect("/login");
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      res.status(404).json({ message: "No blog found with this ID" });
    } else {
      const blogPrint = blog.get({ plain: true });
      res.render("blog-edit", {
        blogPrint,
      });
    }
  } catch (err) {
    res.status(500).json(err).redirect("/login");
  }
});

module.exports = router;
