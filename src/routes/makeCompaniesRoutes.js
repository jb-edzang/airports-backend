import makeRoutes from "../makeRoutes.js"

const makeCompaniesRoutes = makeRoutes("/companies", ({ router }) => {
  return router
})
export default makeCompaniesRoutes
