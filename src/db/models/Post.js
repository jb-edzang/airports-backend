import { Model } from "objection"
//import hashPassword from "../../hashPassword.js"
import User from "./User.js"

class Post extends Model {
  static tableName = "posts"

  static get relationMappings() {
    return {
      user: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "posts.userId",
          to: "user.Id"
        }
      }
    }
  }

  checkPassword(password) {
    const [passwordHash] = hashPassword(password, this.passwordSalt)

    return this.passwordHash === passwordHash
  }
}

export default Post
