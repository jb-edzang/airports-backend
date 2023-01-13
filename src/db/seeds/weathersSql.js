import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// weathers
let weathersSql = `INSERT INTO weathers (
  "temperature",
  "date"
  "latitude"
  "longitude"
  "position"
  "updatedAt"
) VALUES ${[...new Array(1000)]
  .map(() => {
    const temperature = faker.address.temperature()
    const date = faker.date.past(faker.random.numeric(2)).toISOString()
    const latitude = faker.address.latitude()
    const longitude = faker.address.longitude()
    const position = faker.address.position()
    const updatedAt = faker.date.updatedAt()

    return `(
    ${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"},
    '${
      Math.floor(Math.random() * 100) % 40 ? country : faker.address.country()
    }',
    '${temperature}',
    '${date}',
    '${latitude}',
    '${longitude}',
    '${position}',
    '${updatedAt}',
  )`
  })
  .join(",")}`

writeFileSync("./weathers.sql", weathersSql, {
  encoding: "utf-8",
  flag: "w"
})
