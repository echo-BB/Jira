/*
 * @Date: 2023-02-12 23:17:35
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-12 23:44:05
 * @FilePath: \Jira\__json_server_mock__\middleware.js
 * @Description:
 */
module.exports = (req, res, next) => {
  console.log(req.body); //如果404了，输出检查看看控制台里输出什么
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "ollie" && req.body.password === "123") {
      console.log(req.body.username);
      console.log(req.body.password);
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({
        messages: "用户名或密码错误",
      });
    }
  }
  next();
};
