import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import AirplanesModel from "./Airplane.js"

class Constructor extends Model {
  static tableName = "constructors"

  static get relationMappings() {
    return {
      airplanesModels: {
        relation: Model.HasManyRelation,
        modelClass: AirplanesModel,
        join: {
          from: "constructor.id",
          to: "airplanesModel.constructorId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Constructor
