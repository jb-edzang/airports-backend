import makeRoutes from "../makeRoutes.js"

const makeDeparturesRoutes = makeRoutes("/departures", ({ router }) => {
  return router
})
export default makeDeparturesRoutes
