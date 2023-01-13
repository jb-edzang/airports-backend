import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// constructors
let constructorsSql = `INSERT INTO constructors (
  "name",
) VALUES ${[...new Array(1000)]
  .map(() => {
    const name = faker.company.name().replace(/'/g, "''")

    return `(
    ${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"},
    '${
      Math.floor(Math.random() * 100) % 40 ? country : faker.address.country()
    }',
    '${name}',
  )`
  })
  .join(",")}`

writeFileSync("./constructors.sql", constructorsSql, {
  encoding: "utf-8",
  flag: "w"
})
