import makeRoutes from "../makeRoutes.js"

const makeArrivalsRoutes = makeRoutes("/arrivals", ({ router }) => {
  return router
})
export default makeArrivalsRoutes
