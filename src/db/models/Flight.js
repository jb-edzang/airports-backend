import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Passenger from "./Passenger.js"

class Flight extends Model {
  static tableName = "flights"

  static get relationMappings() {
    return {
      passenger: {
        relation: Model.HasManyRelation,
        modelClass: Passenger,
        join: {
          from: "flights.id",
          to: "passenger.flightId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Flight
