import cors from "cors"
import express from "express"
import knex from "knex"
import { Model } from "objection"
import config from "./config.js"
//import handleErrrors from "./middlewares/handleErrors.js"
import makeSessionRoutes from "./routes/makeSessionRoutes.js"
import makeUploadRoutes from "./routes/makeUploadRoutes.js"
import makePassengersRoutes from "./routes/makePassengersRoutes.js"
import makeAirplanesModelsRoutes from "./routes/makeAirplanesModelsRoutes.js"
import makeAirplanesRoutes from "./routes/makeAirplanesRoutes.js"
import makeAirportsRoutes from "./routes/makeAirportsRoutes.js"
import makeArrivalsRoutes from "./routes/makeArrivalsRoutes.js"
import makeCompaniesRoutes from "./routes/makeCompaniesRoutes.js"
import makeConstructorsRoutes from "./routes/makeConstructorsRoutes.js"
import makeCrewMembersRoutes from "./routes/makeCrewMembersRoutes.js"
import makeDeparturesRoutes from "./routes/makeDeparturesRoutes.js"
import makeFlightsRoutes from "./routes/makeFlightsRoutes.js"
import makeGatesRoutes from "./routes/makeGatesRoutes.js"
import makeTerminalsRoutes from "./routes/makeTerminalsRoutes.js"
import makeWeathersRoutes from "./routes/makeWeathersRoutes.js"

const app = express()
const db = knex(config.db)

Model.knex(db)

app.use(cors())

app.use((req, res, next) => {
  req.locals = {
    params: req.params,
    query: req.query,
    body: req.body
  }

  next()
})

app.get("/products/:productId", (req, res) =>
  res.send(`Product #${req.params.productId}`)
)
app.get("/categories/:categoryId/products/:productId", (req, res) =>
  res.send(
    `Category #${req.params.categoryId} Product #${req.params.productId}`
  )
)

makeUploadRoutes({ app })
makeSessionRoutes({ app, db })
makePassengersRoutes({ app, db })
makeWeathersRoutes({ app })
makeTerminalsRoutes({ app, db })
makeGatesRoutes({ app, db })
makeFlightsRoutes({ app })
makeDeparturesRoutes({ app, db })
makeCrewMembersRoutes({ app, db })
makeConstructorsRoutes({ app })
makeCompaniesRoutes({ app, db })
makeArrivalsRoutes({ app, db })
makeAirportsRoutes({ app })
makeAirplanesRoutes({ app, db })
makeAirplanesModelsRoutes({ app, db })

//app.use(handleErrrors)

app.listen(config.server.port, () =>
  // eslint-disable-next-line no-console
  console.log(`Listening on :${config.server.port}`)
)
