const Mock = require("mockjs");

module.exports = () => {
  return Mock.mock({
    "warehouse|50": [
      {
        "id|+1": 1,
        name: "@ctitle(10)"
      }
    ]
  });
};
