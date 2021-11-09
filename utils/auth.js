const withAuth = (req, res, next) => {
  console.log("++__++__++__++__++__++__++__++__++__++__++__++__++__++", req.session)
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
