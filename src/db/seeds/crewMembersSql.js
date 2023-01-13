import { faker } from "@faker-js/faker"
import { writeFileSync } from "node:fs"

// crewMembers
let crewMembersSql = `INSERT INTO crewMembers (
  "passportNumber",
  "gender",
  "firstName",
  "lastName",
  "birthDate",
  "birthCountry",
  "citizenshipCountry"
  "addressLine1"
  "addressLine2"
  "zipcode"
  "city"
  "country"
  "job"
) VALUES ${[...new Array(1000)]
  .map(() => {
    const name = faker.name.airportName().replace(/'/g, "''")
    const passportNumber = faker.address.passportNumber().replace(/'/g, "''")
    const firstName = faker.name.firstName().replace(/'/g, "''")
    const lastName = faker.name.lastName().replace(/'/g, "''")
    const birthDate = faker.date.birthDate()
    const birthCountry = faker.date.birthCountry()
    const citizenshipCountry = faker.address
      .citizenshipCountry()
      .replace(/'/g, "''")
    const country = faker.address.countryCode().replace(/'/g, "''")
    const addressLine1 = faker.address.streetAddress().replace(/'/g, "''")
    const addressLine2 = faker.address.secondaryAddress().replace(/'/g, "''")
    const zipcode = faker.address.zipCode().replace(/'/g, "''")
    const city = faker.address.city().replace(/'/g, "''")
    const job = faker.name.jobDescriptor().replace(/'/g, "''")

    return `(
    ${Math.floor(Math.random() * 100) % 30 ? "TRUE" : "FALSE"},
    '${
      Math.floor(Math.random() * 100) % 40 ? country : faker.address.country()
    }',
    '${birthCountry}',
    '${birthDate}',
    '${birthCountry}'
    '${citizenshipCountry}',
    '${passportNumber}',
    '${name}'
    '${zipcode}',
    '${name}',
    '${country}'
    '${city}',
    '${addressLine1}',
    '${addressLine2}'
    '${job}',
    '${firstName}'
    '${lastName}'
  )`
  })
  .join(",")}`

writeFileSync("./crewMembers.sql", crewMembersSql, {
  encoding: "utf-8",
  flag: "w"
})
