const connection = require("../database/connection");
module.exports = {
  async index(req, res) {
    const { page } = req.query;
    const [count] = await connection("incidents").count();
    const ong_id = req.headers.authorization;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(6)
      .offset((page - 1) * 6)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    res.header("X-Total-Count", count["count(*)"]);
    let totalCount = count["count(*)"];
    console.log(incidents);
    return res.json({
      incidents,
      count: totalCount
    });
  }
};
