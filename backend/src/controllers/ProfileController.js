const connection = require("../database/connection");

/*
- Console the ong Id
= check ong id in the db
-Return all incidents for the related ong 
*/

/*
      .join("ongs", "ongs.id", "=", "incidents.ong_id") // Req Ong credenctials
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
        */
module.exports = {
  async index(req, res) {
    const { page } = req.query;
    const [count] = await connection("incidents").count();
    const ong_id = req.headers.authorization;
    console.log(ong_id);

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    res.header("X-Total-Count", count["count(*)"]);
    return res.json({
      incidents
    });
  }
};
