import * as yup from "yup"
import config from "./config.js"

export const validateEmail = yup.string().email().trim().label("E-mail")

export const validatePassword = yup
  .string()
  .min(8)
  .matches(/\W/, "Password must contain at least a special character")
  .label("Password")

export const validateUsername = yup
  .string()
  .min(2)
  .max(15)
  .matches(
    /^[a-z][a-z0-9._]*/,
    "Username must contain only letters, numbers, '.' and '_'"
  )
  .trim()
  .label("Username")
export const validateName = yup
  .string()
  .min(2)
  .max(15)
  .matches(
    /^[a-z][a-z0-9._]*/,
    "Name must contain only letters, numbers, '.' and '_'"
  )
  .trim()
  .label("name")

export const validateDisplayName = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("Display Name")

export const validateLimit = yup
  .number()
  .min(config.view.results.minLimit)
  .max(config.view.results.maxLimit)
  .integer()
  .default(config.view.results.defaultLimit)
  .label("Pagination limit")

export const validateOffset = yup
  .number()
  .min(0)
  .integer()
  .default(0)
  .label("Pagination offset")

export const validateId = yup.number().integer().min(1).label("User ID")

export const validateEmailOrUsername = yup
  .string()
  .min(2)
  .trim()
  .label("Email or Username")

export const validateAddressLine1 = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine1")

export const validateAddressLine2 = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validateBirthCountry = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validateBirthDate = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validateCitizenCountry = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validateCity = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validateCountry = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validateGender = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validateIsDisabledPerson = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validatePassportNumber = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validateZipcode = yup
  .string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("addressLine2")
export const validatePhoneNumber = yup
  .string()
  .min(10)
  .max(15)
  .trim()
  .matches("^(\\([0-9]{2}\\))?[0-9]{2}-[0-9]{2}[0-9]{2}-[0-9]{2}[0-9]{2}")
  .label("phone number")

export const validateBusinessClassSeats = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateFirstClassSeats = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateSecondClassSeats = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateCrewCapacity = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateLoadCapacity = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateFuelCapacity = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateWingspan = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateLenght = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateHeight = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)
export const validateWeight = yup
  .string()
  .min(1)
  .max(10)
  .trim()
  .matches(/[^\n\r\u00a0]/)

export const validatePublishedAt = yup.date().label("Publishing date")

export const validateSearch = yup.string().min(3).label("Search terms")
