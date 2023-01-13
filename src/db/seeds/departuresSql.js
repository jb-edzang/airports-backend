import { faker } from "@faker-js/faker"
import knex from "knex"
import config from "../../config.js"
import rand from "../../utils/rand.js"

const db = knex(config.db)
const flightIds = await db("flights").select("id")
const gateIds = await db("gates").select("id")

// departuresql
let departuresSql = `INSERT INTO departures (
  "dateTime",
  "gateId",
  "flightId"
) VALUES ${[...new Array(1000)]
  .map(() => {
    const dateTime = faker.datatype.datetime()

    return `(
    '${dateTime}',
    '${flightIds[rand(0, flightIds.length - 1)]}',
    '${gateIds[rand(0, gateIds.length - 1)]}',
  )`
  })
  .join(",")}`

export default departuresSql
