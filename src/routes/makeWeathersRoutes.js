import makeRoutes from "../makeRoutes.js"

const makeWeatherRoutes = makeRoutes("/weathers", ({ router }) => {
  return router
})
export default makeWeatherRoutes
