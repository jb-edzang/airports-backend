import { Model } from "objection"
import Company from "./Company.js"
import Flight from "./Flight.js"

class CrewMember extends Model {
  static tableName = "crewMembers"

  static get relationMappings() {
    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join: {
          from: "crewMembers.companyId",
          to: "companies.id"
        }
      },
      flights: {
        relation: Model.ManyToManyRelation,
        modelClass: Flight,
        join: {
          from: "crewMembers.id",
          through: {
            from: "rel_crewMembers_flights.crewMemberId",
            to: "rel_crewMembers_flights.flightId"
          },
          to: "flights.id"
        }
      }
    }
  }
}

export default CrewMember
