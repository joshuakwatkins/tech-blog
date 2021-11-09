const { Comment } = require("../models");

const commentData = [
  {
    body: "I LUV PIKACHU!",
    user_id: 1,
    blog_id: 1,
  },
  {
    body: "Growlithe is the far superior choice",
    user_id: 1,
    blog_id: 2,
  },
  {
    body: "You can't read",
    user_id: 2,
    blog_id: 3,
  },
  {
    body: "Harry Potter is the far superior choice",
    user_id: 2,
    blog_id: 3,
  },
  {
    body: "But I can't eat dairy",
    user_id: 3,
    blog_id: 4,
  },
  {
    body: "Nutmilk is the far superior choice",
    user_id: 3,
    blog_id: 5,
  },
  {
    body: "Checkout my highscores",
    user_id: 4,
    blog_id: 1,
  },
  {
    body: "A solid work ethic is the far superior choice",
    user_id: 4,
    blog_id: 2,
  },
  {
    body: "Stand up for your worker's rights!",
    user_id: 5,
    blog_id: 4,
  },
  {
    body: "Python is the far superior choice",
    user_id: 5,
    blog_id: 5,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
