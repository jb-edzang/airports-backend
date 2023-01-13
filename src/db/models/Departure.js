import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Arrival from "./Arrival.js"

class Departure extends Model {
  static tableName = "departures"

  static get relationMappings() {
    return {
      arrivals: {
        relation: Model.HasManyRelation,
        modelClass: Arrival,
        join: {
          from: "departure.id",
          to: "arrival.departureId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Departure
