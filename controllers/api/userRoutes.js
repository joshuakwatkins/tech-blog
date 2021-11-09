const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.post("/", async (req, res) => {
  console.log(
    "\n\nstarting the user create\n\n\n=============================\n\n\n",
    req.body
  );
  try {
    const newUser = await User.create({
      name: req.body.username,
      password: req.body.password,
    });

    req.session.save((err) => {
      err ? console.log(err) : console.log("success for session save");
      req.session.user_id = newUser.id;
      req.session.name = newUser.name;
      req.session.logged_in = true;
      console.log(req.session);
      res.json(newUser);
    });
    console.log("2", req.session);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  console.log("we are in the login route");
  try {
    const user = await User.findOne({
      where: {
        name: req.body.name,
      },
    });
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "We could not locate that user" });
      return;
    }

    const passCheck = user.checkPassword(req.body.password);

    if (!passCheck) {
      res
        .status(400)
        .json({ message: "Please check your password and try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.name = user.name;
      req.session.logged_in = true;

      res.json({ message: "User is logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
