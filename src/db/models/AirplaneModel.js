import { Model } from "objection"
import Constructor from "./Constructor.js"

class AirplaneModel extends Model {
  static tableName = "airplanesModels"

  static get relationMappings() {
    return {
      constructor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Constructor,
        join: {
          from: "airplanesModel.constructorId",
          to: "constructors.id"
        }
      }
    }
  }
}

export default AirplaneModel
