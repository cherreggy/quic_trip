import fs from "fs";

export default function handler(req, res) {
  const op = req.query;
  if (op.operate == "register") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    if (users.indexOf(req.body.username) !== -1) {
      res.send({
        status: 202,
        message: "用户名已存在",
      });
    } else {
      const userinfo = {
        id: req.body.id,
        username: req.body.username,
        gender: req.body.gender,
        email_address: req.body.email_address,
        trip_declaration: req.body.trip_declaration,
        password: req.body.password,
      };
      fs.writeFileSync(
        `./public/Json/${req.body.username}.json`,
        JSON.stringify(userinfo)
      );
      res.send({
        status: 200,
        message: "注册成功",
        data: userinfo,
      });
    }
  } else if (op.operate == "login") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    if (users.indexOf(req.body.username) === -1) {
      res.send({
        status: 203,
        message: "用户不存在",
      });
    } else {
      const u = users[users.indexOf(req.body.username)];
      var userinfo = JSON.parse(fs.readFileSync(`./public/Json/${u}.json`));
      if (userinfo.password === req.body.password) {
        res.send({
          status: 200,
          message: "登陆成功",
          data: userinfo,
          token: req.body.username + "-" + userinfo.id,
        });
      } else {
        res.send({
          status: 202,
          message: "密码错误",
        });
      }
    }
  } else if (op.operate == "user") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    const username = req.body.token.split("-")[0];
    const u = users[users.indexOf(username)];
    var userinfo = JSON.parse(fs.readFileSync(`./public/Json/${u}.json`));
    res.send({
      status: 200,
      message: "已登录",
      data: userinfo,
    });
  } else if (op.operate == "bookerinfo") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    const username = req.body.token;
    const u = users[users.indexOf(username)];
    var userinfo = JSON.parse(fs.readFileSync(`./public/Json/${u}.json`));
    if (userinfo["hotelbook"] === undefined) {
      userinfo["hotelbook"] = [];
    }
    if (userinfo["planebook"] === undefined) {
      userinfo["planebook"] = [];
    }
    if (userinfo["trainbook"] === undefined) {
      userinfo["trainbook"] = [];
    }
    if (userinfo["busbook"] === undefined) {
      userinfo["busbook"] = [];
    }
    if (userinfo["boatbook"] === undefined) {
      userinfo["boatbook"] = [];
    }
    res.send({
      status: 200,
      data: userinfo,
    });
  } else if (op.operate == "bookhotel") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    const username = req.body.token;
    const u = users[users.indexOf(username)];
    var userinfo = JSON.parse(fs.readFileSync(`./public/Json/${u}.json`));
    if (userinfo["hotelbook"] === undefined) {
      userinfo["hotelbook"] = [];
    }
    userinfo["hotelbook"].push({
      id: req.body.id,
      username: username,
      userid: userinfo.id,
      destination: req.body.destination,
      checkinDate: req.body.checkinDate,
      checkoutDate: req.body.checkoutDate,
      RoomCount: req.body.RoomCount,
      AdultCount: req.body.AdultCount,
      ChildCount: req.body.ChildCount,
      HotelLevel: req.body.HotelLevel,
      description: req.body.description,
    });
    fs.writeFileSync(`./public/Json/${u}.json`, JSON.stringify(userinfo));
    res.send({
      status: 200,
      message: "预订成功",
    });
  } else if (op.operate == "bookplane") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    const username = req.body.token;
    const u = users[users.indexOf(username)];
    var userinfo = JSON.parse(fs.readFileSync(`./public/Json/${u}.json`));
    if (userinfo["planebook"] === undefined) {
      userinfo["planebook"] = [];
    }
    userinfo["planebook"].push({
      id: req.body.id,
      username: username,
      userid: userinfo.id,
      StartPlace: req.body.StartPlace,
      EndPlace: req.body.EndPlace,
      Triptype: req.body.Triptype,
      Zhifei: req.body.Zhifei,
      Type: req.body.Type,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      AdultCount: req.body.AdultCount,
      ChildCount: req.body.ChildCount,
      EnfantCount: req.body.EnfantCount,
    });
    fs.writeFileSync(`./public/Json/${u}.json`, JSON.stringify(userinfo));
    res.send({
      status: 200,
      message: "预订成功",
    });
  } else if (op.operate == "booktrain") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    const username = req.body.token;
    const u = users[users.indexOf(username)];
    var userinfo = JSON.parse(fs.readFileSync(`./public/Json/${u}.json`));
    if (userinfo["trainbook"] === undefined) {
      userinfo["trainbook"] = [];
    }
    userinfo["trainbook"].push({
      id: req.body.id,
      username: username,
      userid: userinfo.id,
      StartPlace: req.body.StartPlace,
      EndPlace: req.body.EndPlace,
      Triptype: req.body.Triptype,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
    });
    fs.writeFileSync(`./public/Json/${u}.json`, JSON.stringify(userinfo));
    res.send({
      status: 200,
      message: "预订成功",
    });
  } else if (op.operate == "bookbusorboat") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    const username = req.body.token;
    const u = users[users.indexOf(username)];
    var userinfo = JSON.parse(fs.readFileSync(`./public/Json/${u}.json`));
    if (req.body.BusOrBoat === "汽车票订购") {
      if (userinfo["busbook"] === undefined) {
        userinfo["busbook"] = [];
      }
      userinfo["busbook"].push({
        id: req.body.id,
        username: username,
        userid: userinfo.id,
        StartPlace: req.body.StartPlace,
        EndPlace: req.body.EndPlace,
        StartDate: req.body.StartDate,
      });
      fs.writeFileSync(`./public/Json/${u}.json`, JSON.stringify(userinfo));
      res.send({
        status: 200,
        message: "预订成功",
      });
    } else if (req.body.BusOrBoat === "船票订购") {
      if (userinfo["boatbook"] === undefined) {
        userinfo["boatbook"] = [];
      }
      userinfo["boatbook"].push({
        id: req.body.id,
        username: username,
        userid: userinfo.id,
        StartPlace: req.body.StartPlace,
        EndPlace: req.body.EndPlace,
        StartDate: req.body.StartDate,
      });
      fs.writeFileSync(`./public/Json/${u}.json`, JSON.stringify(userinfo));
      res.send({
        status: 200,
        message: "预订成功",
      });
    }
  } else if (op.operate == "deletebooker") {
    var users = fs.readdirSync("./public/Json");
    users = users.map((item) => item.split(".")[0]);
    const username = req.body.token;
    const u = users[users.indexOf(username)];
    var userinfo = JSON.parse(fs.readFileSync(`./public/Json/${u}.json`));
    userinfo["hotelbook"] = req.body.hotelbook;
    userinfo["planebook"] = req.body.planebook;
    userinfo["trainbook"] = req.body.trainbook;
    userinfo["busbook"] = req.body.busbook;
    userinfo["boatbook"] = req.body.boatbook;
    fs.writeFileSync(`./public/Json/${u}.json`, JSON.stringify(userinfo));
    res.send({
      status: 200,
      message: "删除成功",
    });
  }
}
