import Passenger from "../db/models/Passenger.js"
import filterDBResult from "../filterDBResult.js"
import hashPassword from "../hashPassword.js"
import makeRoutes from "../makeRoutes.js"
import auth from "../middlewares/auth.js"
import validate from "../middlewares/validate.js"
// import hasAccess from "../utils/hasAccess.js"
import {
  validateId,
  validatePassportNumber,
  validateEmail,
  validatePhoneNumber,
  validateGender,
  validateUsername,
  validateIsDisabledPerson,
  validateBirthDate,
  validateBirthCountry,
  validateCitizenCountry,
  validateAddressLine1,
  validateAddressLine2,
  validateZipcode,
  validateCity,
  validateCountry,
  validateLimit,
  validateOffset
} from "../validators.js"

const makePassengersRoutes = makeRoutes("/passengers", ({ router }) => {
  // CREATE
  router.post(
    "/",
    validate({
      body: {
        passportNumber: validatePassportNumber.required(),
        email: validateEmail.required(),
        phone: validatePhoneNumber.required(),
        gender: validateGender.required(),
        username: validateUsername.required(),
        isDisabledPerson: validateIsDisabledPerson.required(),
        birthDate: validateBirthDate.required(),
        birthCountry: validateBirthCountry.required(),
        citizenCountry: validateCitizenCountry.required(),
        addressLine2: validateAddressLine1.required(),
        addressLine2: validateAddressLine2.required(),
        zipcode: validateZipcode.required(),
        city: validateCity.required(),
        country: validateCountry.required(),
        limit: validateLimit.required(),
        offset: validateOffset.required()
      }
    }),
    async (req, res) => {
      const {
        passportNumber,
        email,
        phoneNumber,
        gender,
        username,
        isDisabledPerson,
        birthDate,
        birthCountry,
        citizenCountry,
        addressLine1,
        addressLine2,
        zipcode,
        city,
        country
      } = req.body
      // const [passwordHash, passwordSalt] = hashPassword(password)

      const [passenger] = await Passenger.query()
        .insert({
          passportNumber,
          email,
          phoneNumber,
          gender,
          username,
          isDisabledPerson,
          birthDate,
          birthCountry,
          citizenCountry,
          addressLine1,
          addressLine2,
          zipcode,
          city,
          country
        })
        .returning("*")

      res.send({ result: filterDBResult([passenger]), count: 1 })
    }
  )
  // READ collection
  router.get(
    "/",
    auth("ADMIN"),
    validate({
      query: {
        limit: validateLimit,
        offset: validateOffset
      }
    }),
    async (req, res) => {
      const { limit, offset } = req.locals.query
      const passengers = await Passenger.query().limit(limit).offset(offset)
      const [{ count }] = await Passenger.query().count()

      res.send({ result: filterDBResult(passengers), count })
    }
  )
  // READ single
  router.get(
    "/:username",
    validate({
      params: {
        username: validateUsername.required()
      }
    }),
    async (req, res) => {
      const { username } = req.params
      const passenger = await Passenger.query()
        .findOne({ username })
        .throwIfNotFound()

      res.send({ result: filterDBResult([passenger]), count: 1 })
    }
  )
  // UPDATE partial
  router.patch(
    "/:passengerId",
    auth(),
    validate({
      params: {
        passengerId: validateId.required()
      },
      body: {
        email: validateEmail,
        username: validateUsername
        // password: validatePassword
      }
    }),
    async (req, res) => {
      const {
        params: { passengerId },
        body: { email, username, password },
        session
      } = req

      if (passengerId !== session.passenger.id) {
        hasAccess(req.session, "ADMIN")
      }

      const passenger = await Passenger.query()
        .findById(passengerId)
        .throwIfNotFound()

      let passwordHash
      let passwordSalt

      if (password) {
        const [hash, salt] = hashPassword(password)

        passwordHash = hash
        passwordSalt = salt
      }

      const updatedPassenger = await passenger
        .$query()
        .patch({
          email,
          username,
          passwordHash,
          passwordSalt,
          updatedAt: new Date()
        })
        .returning("*")

      res.send({ result: updatedPassenger, count: 1 })
    }
  )
  // DELETE
  router.delete(
    "/:passengerId",
    auth("ADMIN"),
    validate({
      params: {
        passengerId: validateId.required()
      }
    }),
    async (req, res) => {
      hasAccess("ADMIN")

      const { passengerId } = req.params

      const passenger = await Passenger.query()
        .deleteById(passengerId)
        .throwIfNotFound()

      res.send({ result: filterDBResult([passenger]), count: 1 })
    }
  )

  return router
})

export default makePassengersRoutes
