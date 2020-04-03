const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);

/**  HTTP Methods
 * GET
 * POST
 * PUT
 **/

/**  Params types
 * Query
 * Route (params)
 * Request (body)
 **/

/** Database
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsof SQL Server
 * NoSQL: MongoDB, CouchDB, Cassandra, Redis
 *
 ***
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*').where() || Using Knex
 */
