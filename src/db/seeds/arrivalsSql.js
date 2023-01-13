import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// arrivals
let arrivalsSql = `INSERT INTO arrivals (
  "dateTime",
) VALUES ${[...new Array(1000)]
  .map(() => {
    const dateTime = faker.datatype.datetime()

    return `(
    ${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"},
    '${
      Math.floor(Math.random() * 100) % 40 ? country : faker.address.country()
    }',
    '${dateTime}',
  )`
  })
  .join(",")}`

writeFileSync("./arrivals.sql", arrivalsSql, {
  encoding: "utf-8",
  flag: "w"
})
