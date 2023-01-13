import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// airportsSql
let airportsSql = `INSERT INTO airports (
  "name",
  "addressLine1",
  "addressLine2",
  "zipcode",
  "city",
  "country",
) VALUES ${[...new Array(1000)]
  .map(() => {
    const name = faker.name.jobArea().replace(/'/g, "''")
    const addressLine1 = faker.address.name().replace(/'/g, "''")
    const addressLine2 = faker.address.streetAddress().replace(/'/g, "''")
    const zipcode = faker.address.secondaryAddress().replace(/'/g, "''")
    const city = faker.address.city().replace(/'/g, "''")
    const country = faker.address.countryCode().replace(/'/g, "''")

    return `(
    ${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"},
    '${
      Math.floor(Math.random() * 100) % 40 ? country : faker.address.country()
    }',
    '${zipcode}',
    '${name}',
    '${country}'
    '${city}',
    '${addressLine1}',
    '${addressLine2}'
  )`
  })
  .join(",")}`

writeFileSync("./airports.sql", airportsSql, {
  encoding: "utf-8",
  flag: "w"
})
