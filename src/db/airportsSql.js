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
    const country = faker.address.countryCode()
    const name = faker.company.name().replace(/'/g, "''")

    return `(
    '${userName}',
    ${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"},
    '${faker.address.streetAddress().replace(/'/g, "''")}',
    '${faker.address.secondaryAddress().replace(/'/g, "''")}',
    '${faker.address.zipCode()}',
    '${faker.address.city().replace(/'/g, "''")}',
    '${country}'
    '${
      Math.floor(Math.random() * 100) % 40 ? country : faker.address.country()
    }',
  )`
  })
  .join(",")}`

writeFileSync("./airports.sql", airportsSql, {
  encoding: "utf-8",
  flag: "w"
})
