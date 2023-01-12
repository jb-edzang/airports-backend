import makeRoutes from "../makeRoutes.js"

const makeFlightsRoutes = makeRoutes("/flights", ({ router }) => {
  return router
})
export default makeFlightsRoutes
