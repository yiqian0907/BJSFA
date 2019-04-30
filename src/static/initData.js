const Mock = require("mockjs");

module.exports = () => {
  return Mock.mock({
    "products|100": [
      {
        "code|+1": 89012380,
        name: "@ctitle(15)",
        imgURL: "../assets/logo.png",
        size: "@natural(10, 20)",
        price: "@float(50, 100, 0, 2)",
        inventory: "@natural(1000,5000)"
      }
    ]
  });
};
