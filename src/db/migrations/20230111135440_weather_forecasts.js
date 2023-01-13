export const up = async (knex) => {
  await knex.schema.createTable("weather", (table) => {
    table.increments("id")
    table.integer("temperature").notNullable()
    table.datetime("date").notNullable()
    table.integer("latitude").notNullable()
    table.integer("longititude").notNullable()
    table.text("position").notNullable()
    table.timestamp("updatedAt").notNullable()
    table.text("editedBy").notNullable()
  })
  await knex.schema.createTable("country", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.integer("weatherId").notNullable().references("id").inTable("weather")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("country")
  await knex.schema.dropTable("weather")
}
