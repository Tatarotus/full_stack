const express = require("express");
const routes = express.Router();

routes.get("/users", (req, res) => {
  return res.json({
    name: "Samuel Resolve Website"
  });
  //return res.status(201).send();
});
routes.post("/users", (request, response) => {
  const params = request.body;

  console.log(params);
  return response.json({
    week: "Omnistack com o Diogo",
    student: "Samuel Dantas"
  });
});

module.exports = routes;
