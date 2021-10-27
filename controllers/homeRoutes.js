const router = require("express").Router();
const { Comment, User, Blog } = require("../models/");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: [User],
    });

    const blogsPrint = blogs.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogsPrint,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (!blog) {
      res.status(404).json({ message: "No blog with that ID found." });
    } else {
      const blogPrint = blog.get({ plain: true });
      res.render("blog", {
        blogPrint,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
