import { Model } from "objection"
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
}

export default Flight
