import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Gate from "./Gate.js"

class Terminal extends Model {
  static tableName = "terminales"

  static get relationMappings() {
    return {
      gates: {
        relation: Model.HasManyRelation,
        modelClass: Gate,
        join: {
          from: "terminal.id",
          to: "gate.terminalId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Terminal
