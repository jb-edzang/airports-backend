import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Country from "./Country.js"

class Weather extends Model {
  static tableName = "weathers"

  static get relationMappings() {
    return {
      countries: {
        relation: Model.HasManyRelation,
        modelClass: Country,
        join: {
          from: "weather.id",
          to: "country.weatherId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Weather
