import { Model } from "objection"
import Airport from "./Airport.js"

class Company extends Model {
  static tableName = "companies"

  static get relationMappings() {
    return {
      airports: {
        relation: Model.HasManyRelation,
        modelClass: Airport,
        join: {
          from: "company.id",
          to: "airport.companyId"
        }
      }
    }
  }
}

export default Company
