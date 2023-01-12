import makeRoutes from "../makeRoutes.js"

const makeAirplanesModelsRoutes = makeRoutes(
  "/airplanesModels",
  ({ router }) => {
    return router
  }
)
export default makeAirplanesModelsRoutes
