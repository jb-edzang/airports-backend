export const up = async (knex) => {
  await knex.schema.createTable("constructors", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
  })

  await knex.schema.createTable("passengers", (table) => {
    table.increments("id").primary()
    table.text("passportNumber").notNullable().unique()
    table.text("email").notNullable().unique()
    table.text("phoneNumber").notNullable()
    table.text("gender").notNullable()
    table.text("firstName").notNullable()
    table.text("lastName").notNullable()
    table.boolean("isDisabledPerson").notNullable()
    table.datetime("birthDate").notNullable()
    table.text("birthCountry").notNullable()
    table.text("citizenCountry").notNullable()
    table.text("addressLine1").notNullable()
    table.text("addressLine2").notNullable()
    table.text("zipcode").notNullable()
    table.text("city").notNullable()
    table.text("country").notNullable()
  })

  await knex.schema.createTable("companies", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
    table.boolean("isLowCost").notNullable()
  })

  await knex.schema.createTable("airports", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
    table.text("addressLine1").notNullable()
    table.text("addressLine2").notNullable()
    table.text("zipcode").notNullable()
    table.text("city").notNullable()
    table.text("country").notNullable()
  })

  await knex.schema.createTable("airplaneModels", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
    table.integer("businessClassSeats").notNullable()
    table.integer("firstClassSeats").notNullable()
    table.integer("secondClassSeats").notNullable()
    table.integer("crewCapacity").notNullable()
    table.integer("loadCapacity").notNullable()
    table.integer("fuelCapacity").notNullable()
    table.integer("wingspan").notNullable()
    table.integer("lenght").notNullable()
    table.integer("height").notNullable()
    table.integer("weight").notNullable()
    table
      .integer("constructorId")
      .notNullable()
      .references("id")
      .inTable("constructors")
  })

  await knex.schema.createTable("airplanes", (table) => {
    table.increments("id").primary()
    table.text("registration").notNullable()
    table
      .integer("airplaneModelId")
      .notNullable()
      .references("id")
      .inTable("airplaneModels")
  })

  await knex.schema.createTable("terminals", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
    table
      .integer("airportId")
      .notNullable()
      .references("id")
      .inTable("airports")
  })

  await knex.schema.createTable("crewMembers", (table) => {
    table.increments("id").primary()
    table.text("passportNumber").notNullable().unique()
    table.text("gender").notNullable()
    table.text("firstName").notNullable()
    table.text("lastName").notNullable()
    table.text("birthDate").notNullable()
    table.text("birthCountry").notNullable()
    table.text("citizenshipCountry").notNullable()
    table.text("addressLine1").notNullable()
    table.text("addressLine2").notNullable()
    table.text("zipcode").notNullable()
    table.text("city").notNullable()
    table.text("country").notNullable()
    table.text("job").notNullable()
    table
      .integer("companyId")
      .notNullable()
      .references("id")
      .inTable("companies")
  })

  await knex.schema.createTable("flights", (table) => {
    table.increments("id").primary()
    table.text("number").notNullable()
    table.text("airplanes").notNullable()
    table.text("companies").notNullable()
    table
      .integer("airplaneId")
      .notNullable()
      .references("id")
      .inTable("airplanes")
    table
      .integer("companyId")
      .notNullable()
      .references("id")
      .inTable("companies")
  })

  await knex.schema.createTable("gates", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
    table.integer("maxWingspan").notNullable()
    table.integer("maxWeight").notNullable()
    table.integer("maxHeight").notNullable()
    table.integer("maxLength").notNullable()
    table
      .integer("terminalId")
      .notNullable()
      .references("id")
      .inTable("terminals")
  })

  await knex.schema.createTable("departures", (table) => {
    table.increments("id").primary()
    table.dateTime("dateTime").notNullable()
    table.integer("flightId").notNullable().references("id").inTable("flights")
    table.integer("gateId").notNullable().references("id").inTable("gates")
  })

  await knex.schema.createTable("arrivals", (table) => {
    table.increments("id").primary()
    table.dateTime("dateTime").notNullable()
    table.integer("flightId").notNullable().references("id").inTable("flights")
    table.integer("gateId").notNullable().references("id").inTable("gates")
  })

  await knex.schema.createTable("rel_crewMembers_flights", (table) => {
    table.increments("id").primary()
    table
      .integer("crewMemberId")
      .notNullable()
      .references("id")
      .inTable("crewMembers")
    table.integer("flightId").notNullable().references("id").inTable("flights")
  })

  await knex.schema.createTable("tickets", (table) => {
    table.increments("id").primary()
    table.text("seatNumber").notNullable()
    table
      .integer("passengerId")
      .notNullable()
      .references("id")
      .inTable("passengers")
    table.integer("flightId").notNullable().references("id").inTable("flights")
  })

  await knex.schema.createTable("posts", (table) => {
    table.increments("id")
    table.text("title").notNullable()
    table.text("content").notNullable()
    table.datetime("publishedAt").notNullable()
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("posts")
  await knex.schema.dropTable("tickets") // commencer par la dernière table en montant vers la 1ère
  await knex.schema.dropTable("terminals")
  await knex.schema.dropTable("rel_crewMembers_flights")
  await knex.schema.dropTable("gates")
  await knex.schema.dropTable("flights")
  await knex.schema.dropTable("departures")
  await knex.schema.dropTable("crewMembers")
  await knex.schema.dropTable("constructors")
  await knex.schema.dropTable("airplaneModels")
  await knex.schema.dropTable("airplanes")
  await knex.schema.dropTable("airports")
  await knex.schema.dropTable("companies")
  await knex.schema.dropTable("arrivals")
  await knex.schema.dropTable("passengers")
}
