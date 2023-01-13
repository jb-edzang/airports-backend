import filterDBResult from "../filterDBResult.js"
import makeRoutes from "../makeRoutes.js"
import validate from "../middlewares/validate.js"
import auth from "../middlewares/auth.js"
import AirplanesModel from "../db/models/Airplane.js"

import {
  // validateId,
  validateName,
  validateBusinessClassSeats,
  validateFirstClassSeats,
  validateSecondClassSeats,
  validateCrewCapacity,
  validateLoadCapacity,
  validateFuelCapacity,
  validateWingspan,
  validateLenght,
  validateHeight,
  validateWeight,
  validateLimit,
  validateOffset
} from "../validators.js"
import AirplaneModel from "../db/models/AirplaneModel.js"

const makeAirplanesModelsRoutes = makeRoutes(
  "/airplanesModels",
  ({ router }) => {
    // CREATE
    router.post(
      "/",
      validate({
        body: {
          name: validateName.required(),
          businessClassSeats: validateBusinessClassSeats.required(),
          firstClassSeats: validateFirstClassSeats.required(),
          secondClassSeats: validateSecondClassSeats.required(),
          crewCapacity: validateCrewCapacity.required(),
          loadCapacity: validateLoadCapacity.required(),
          fuelCapacity: validateFuelCapacity.required(),
          wingspan: validateWingspan.required(),
          lenght: validateLenght.required(),
          height: validateHeight.required(),
          weight: validateWeight.required(),
          limit: validateLimit.required(),
          offset: validateOffset.required()
        }
      }),
      async (req, res) => {
        const {
          name,
          businessClassSeats,
          firstClassSeats,
          secondClassSeats,
          crewCapacity,
          loadCapacity,
          fuelCapacity,
          wingspan,
          lenght,
          height,
          weight,
          constructorId
        } = req.body
        // const [passwordHash, passwordSalt] = hashPassword(password)

        const [airplanesModels] = await AirplanesModel.query()
          .insert({
            name,
            businessClassSeats,
            firstClassSeats,
            secondClassSeats,
            crewCapacity,
            loadCapacity,
            fuelCapacity,
            wingspan,
            lenght,
            height,
            weight,
            constructorId
          })
          .returning("*")
        res.send({ result: filterDBResult([airplanesModels]), count: 1 })
      }
    )

    // READ collection
    router.get(
      "/",
      auth("ADMIN"),
      validate({ query: { limit: validateLimit, offset: validateOffset } }),
      async (req, res) => {
        const { limit, offset } = req.locals.query
        const airplaneModels = await AirplaneModel.query()
          .limit(limit)
          .offset(offset)
        const [{ count }] = await AirplaneModel.query().count()
        res.send({ result: filterDBResult(airplaneModels), count })
      }
    )
    // READ single
    router.get(
      "/:name",
      validate({ params: { name: validateName.required() } }),
      async (req, res) => {
        const airplanesModels = await AirplanesModel.quiry()
          .findOne()
          .throwIfNotFound()
        res.send({ result: filterDBResult([airplanesModels]), count: 1 })
      }
    )

    // UPDATE partial
    router.patch("/", validate(), async (req, res) => res.send())
    // DELETE
    router.delete("/", validate(), async (req, res) => res.send())

    return router
  }
)
export default makeAirplanesModelsRoutes
