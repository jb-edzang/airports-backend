import makeRoutes from "../makeRoutes.js"

const makeAirplanesRoutes = makeRoutes("/airplanes", ({ router }) => {
  return router
})
export default makeAirplanesRoutes
