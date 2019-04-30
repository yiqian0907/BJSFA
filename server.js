const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./src/static/bjdata.json");
const middlewares = jsonServer.defaults();
const Mock = require("mockjs");

server.use(middlewares);

server.use(jsonServer.bodyParser);

router.render = (req, res) => {
  res.jsonp({
    msg: "请求成功",
    code: 1,
    data: res.locals.data,
    token: Mock.mock("@title")
  });
};
server.post("/login", (req, res) => {
  if (
    parseInt(req.body.comCode) === 1111 &&
    parseInt(req.body.empNum) === 22222 &&
    req.body.pwd === "333333"
  ) {
    res.jsonp({
      code: 1,
      msg: "登录成功",
      token: Mock.mock("@title")
    });
  } else {
    res.jsonp({
      code: 0,
      msg: "验证失败"
    });
  }
});

server.use("/api", (req, res, next) => {
  if (req.get("Authorization")) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use("/api", router);

server.listen(45560, () => {
  console.log("JSON Server is running");
});
