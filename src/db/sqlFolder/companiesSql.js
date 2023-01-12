import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// companies
let companiesSql = `INSERT INTO companies (
  "name",
  "isLowCost",
) VALUES ${[...new Array(1000)]
  .map(() => {
    const name = faker.company.name().replace(/'/g, "''")
    const isLowCost = faker.company.boolean().replace(/'/g, "''")

    return `(
    '${faker.random.alphaNumeric(20).toUpperCase()}',
    '${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"}',
    '${isLowCost}',
    '${name}',
  )`
  })
  .join(",")}`

writeFileSync("./companies.sql", companiesSql, {
  encoding: "utf-8",
  flag: "w"
})
