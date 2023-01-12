import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// passengers
let passengersSql = `INSERT INTO passengers (
  "passportNumber",
  "email",
  "phone",
  "gender",
  "firstName",
  "lastName",
  "isDisabledPerson",
  "birthDate",
  "birthCountry",
  "citizenCountry",
  "addressLine1",
  "addressLine2",
  "zipcode",
  "city",
  "country"
) VALUES ${[...new Array(1000)]
  .map(() => {
    const sex = faker.name.sex(true)
    const country = faker.address.countryCode()
    const firstName = faker.name.firstName(sex).replace(/'/g, "''")
    const lastName = faker.name.lastName(sex).replace(/'/g, "''")

    return `(
    '${faker.random.alphaNumeric(20).toUpperCase()}',
    '${faker.internet.email(
      `${firstName}${faker.random.alphaNumeric(20).toUpperCase()}`
    )}',
    '${faker.phone.number()}',
    '${sex}',
    '${firstName}',
    '${lastName}',
    ${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"},
    '${new Date(faker.date.past(faker.random.numeric(2))).toISOString()}',
    '${country}',
    '${
      Math.floor(Math.random() * 100) % 40 ? country : faker.address.country()
    }',
    '${faker.address.streetAddress().replace(/'/g, "''")}',
    '${faker.address.secondaryAddress().replace(/'/g, "''")}',
    '${faker.address.zipCode()}',
    '${faker.address.city().replace(/'/g, "''")}',
    '${country}'
  )`
  })
  .join(",")}`

writeFileSync("./passengers.sql", passengersSql, {
  encoding: "utf-8",
  flag: "w"
})
