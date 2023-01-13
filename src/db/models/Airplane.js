import { Model } from "objection"
import AirplaneModel from "./AirplaneModel.js"

class Airplane extends Model {
  static tableName = "airplanesModels"

  static get relationMappings() {
    return {
      model: {
        relation: Model.BelongsToOneRelation,
        modelClass: AirplaneModel,
        join: {
          from: "airplanes.airplaneModelId",
          to: "airplaneModels.id"
        }
      }
    }
  }
}

export default Airplane
