const { Blog } = require("../models");

const blogData = [
  {
    title: "A defense of pikachu as a life partner.",
    body: `You know what? It is beets. I've crashed into a beet truck. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!\nI was part of something special. Life finds a way. Just my luck, no ice. Yes, Yes, without the oops! I gave it a cold? I gave it a virus. A computer virus. Life finds a way. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!`,
    user_id: 1,
  },
  {
    title: "A Game of Thrones and why illiteracy can be a blessing.",
    body: `You know what? It is beets. I've crashed into a beet truck. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!\nI was part of something special. Life finds a way. Just my luck, no ice. Yes, Yes, without the oops! I gave it a cold? I gave it a virus. A computer virus. Life finds a way. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!`,
    user_id: 2,
  },
  {
    title:
      "Rancid dairy products responsible for the collapse of the American Economy",
    body: `You know what? It is beets. I've crashed into a beet truck. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!\nI was part of something special. Life finds a way. Just my luck, no ice. Yes, Yes, without the oops! I gave it a cold? I gave it a virus. A computer virus. Life finds a way. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!`,
    user_id: 3,
  },
  {
    title:
      "Gamification of popular workflows and an examination of the 'high scores' that result",
    body: `You know what? It is beets. I've crashed into a beet truck. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!\nI was part of something special. Life finds a way. Just my luck, no ice. Yes, Yes, without the oops! I gave it a cold? I gave it a virus. A computer virus. Life finds a way. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!`,
    user_id: 4,
  },
  {
    title: "C++ - An EXPOSE",
    body: `You know what? It is beets. I've crashed into a beet truck. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!\nI was part of something special. Life finds a way. Just my luck, no ice. Yes, Yes, without the oops! I gave it a cold? I gave it a virus. A computer virus. Life finds a way. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!`,
    user_id: 5,
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
