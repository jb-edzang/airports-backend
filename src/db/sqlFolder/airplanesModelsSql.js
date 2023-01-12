import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// airplanesModelsSql
let airplanesModelsSql = `INSERT INTO airplanesModelsSql (
  "name",
  "businessClassSeats",
  "firstClassSeats",
  "secondClassSeats",
  "crewCapacity",
  "loadCapacity",
  "fuelCapacity",
  "wingspan",
  "lenght",
  "height",
  "weight",
  "constructorId",

) VALUES ${[...new Array(1000)]
  .map(() => {
    const airplanesModels = faker.models
      .airplanes(airplanesModels)
      .replace(/'/g, "''")
    const businessClassSeats = faker.models
      .seats(businessClassSeats)
      .replace(/'/g, "''")
    const firstClassSeats = faker.models
      .seats(firstClassSeats)
      .replace(/'/g, "''")
    const secondClassSeats = faker.models
      .seats(secondClassSeats)
      .replace(/'/g, "''")
    const crewCapacity = faker.models.crew(crewCapacity).replace(/'/g, "''")
    const loadCapacity = faker.models.load(loadCapacity).replace(/'/g, "''")
    const fuelCapacity = faker.models.fuel(fuelCapacity).replace(/'/g, "''")
    const wingspan = faker.models.wingspan(wingspan).replace(/'/g, "''")
    const lenght = faker.models.lenght(lenght).replace(/'/g, "''")
    const height = faker.models.height(height).replace(/'/g, "''")
    const weight = faker.models.weight(weight).replace(/'/g, "''")
    const constructorId = faker.models
      .constructor(constructorId)
      .replace(/'/g, "''")

    return `(
    '${faker.random.alphaNumeric(20).toUpperCase()}',
    '${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"}',
    '${airplanesModels}',
    '${businessClassSeats}',
    '${firstClassSeats}',
    '${secondClassSeats}',
    '${crewCapacity}',
    '${loadCapacity}',
    '${fuelCapacity}',
    '${wingspan}',
    '${lenght}',
    '${height}',
    '${weight}',
    '${constructorId}'
  )`
  })
  .join(",")}`

writeFileSync("./airplanesModels.sql", airplanesModelsSql, {
  encoding: "utf-8",
  flag: "w"
})
