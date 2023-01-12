import makeRoutes from "../makeRoutes.js"

const makeAirportsRoutes = makeRoutes("/airports", ({ router }) => {
  return router
})
export default makeAirportsRoutes
