import { faker } from "@faker-js/faker"

// airplanes
const airplanesSql = `INSERT INTO airplanes (
  "registration",
) VALUES ${[...new Array(1000)]
  .map(() => {
    const name = faker.name.registration().replace(/'/g, "''")

    return `(
    '${faker.random.alphaNumeric(20).toUpperCase()}',
    '${Math.floor(Math.random() * 100) > 30 ? "TRUE" : "FALSE"}',
    '${name}',
  )`
  })
  .join(",")}`

export default airplanesSql
