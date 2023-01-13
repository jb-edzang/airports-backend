import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Company from "./Company.js"

class Airport extends Model {
  static tableName = "airports"

  static get relationMappings() {
    return {
      companies: {
        relation: Model.HasManyRelation,
        modelClass: Company,
        join: {
          from: "airport.id",
          to: "company.airportId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Airport
