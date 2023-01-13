import knex from "knex"
import config from "../../config.js"
import airplanesSql from "./airplanesSql.js"
import departuresSql from "./departuresSql.js"
import postsSql from "./postsSql.js"
import ticketsSql from "./ticketsSql.js"
import rel_crewMembers_flightsSql from "./rel_crewMembers_flightsSql.js"
import arrivalsSql from "./arrivalsSql.js"
import gatesSql from "./gatesSql.js"
import flightSql from "./flightSql.js"
import crewMembersSql from "./crewMembersSql.js"
import terminalsSql from "./terminalsSql.js"
import airplanesModelsSql from "./airplanesModelsSql.js"
import airportsSql from "./airportsSql.js"
import companiesSql from "./companiesSql.js"
import passengersSql from "./passengersSql.js"
import constructorsSql from "./constructorsSql.js"

const db = knex(config.db)
await db(constructorsSql),
await db(passengersSql),
await db(companiesSql),
await db(airportsSql),
await db(airplanesModelsSql),
await db(airplanesSql),
await db(terminalsSql),
await db(crewMembersSql),
await db(flightSql),
await db(gatesSql),
await db(departuresSql),
await db(arrivalsSql),
await db(rel_crewMembers_flightsSql),
await db(ticketsSql),
await db(postsSql),