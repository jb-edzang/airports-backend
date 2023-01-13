import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Departure from "./Departure.js"

class Arrival extends Model {
  static tableName = "arrivals"

  static get relationMappings() {
    return {
      departures: {
        relation: Model.HasManyRelation,
        modelClass: Departure,
        join: {
          from: "arival.id",
          to: "departure.arrivalId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Arrival
