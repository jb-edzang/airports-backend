export const up = async (knex) => {
  await knex.schema.createTable("weather", (table) => {
    table.increments("id")
    table.integer("temperature").notNullable()
    table.datetime("date").notNullable()
    table.integer("latitude").notNullable()
    table.integer("longititude").notNullable()
    table.text("position").notNullable()
    table.timestamp("updateAt").notNullable()
    table.text("editedBy").notNullable()
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("weather")
}
