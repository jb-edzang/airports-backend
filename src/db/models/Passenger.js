import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Flight from "./Flight.js"

class Passenger extends Model {
  static tableName = "passengers"

  static get relationMappings() {
    return {
      flights: {
        relation: Model.HasManyRelation,
        modelClass: Flight,
        join: {
          from: "passengers.id",
          to: "flights.passengerId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Passenger
