import { Model } from "objection"
// import hashPassword from "../../hashPassword.js"
import Terminal from "./Terminal.js"

class Gate extends Model {
  static tableName = "gates"

  static get relationMappings() {
    return {
      terminals: {
        relation: Model.HasManyRelation,
        modelClass: Terminal,
        join: {
          from: "gate.id",
          to: "terminal.gateId"
        }
      }
    }
  }

  // checkPassword(password) {
  //   const [passwordHash] = hashPassword(password, this.passwordSalt)

  //   return this.passwordHash === passwordHash
  // }
}

export default Gate
