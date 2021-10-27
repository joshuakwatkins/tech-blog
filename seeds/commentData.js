const { Comment } = require("../models");

const commentData = [
  {
    title: "I LUV PIKACHU!",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 1,
  },
  {
    title: "Growlithe is the far superior choice",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 1,
  },
  {
    title: "You can't read",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 2,
  },
  {
    title: "Harry Potter is the far superior choice",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 2,
  },
  {
    title: "But I can't eat dairy",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 3,
  },
  {
    title: "Nutmilk is the far superior choice",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 3,
  },
  {
    title: "Checkout my highscores",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 4,
  },
  {
    title: "A solid work ethic is the far superior choice",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 4,
  },
  {
    title: "Stand up for your worker's rights!",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 5,
  },
  {
    title: "Python is the far superior choice",
    body: `You know what? It is beets. I've crashed into a beet truck.`,
    user_id: 5,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
