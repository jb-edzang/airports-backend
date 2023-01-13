import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Weather from "./Weather.js"

class Country extends Model {
  static tableName = "countries"

  static get relationMappings() {
    return {
      weathers: {
        relation: Model.HasManyRelation,
        modelClass: Weather,
        join: {
          from: "country.id",
          to: "weather.countryId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Country
