import makeRoutes from "../makeRoutes.js"

const makeConstructorsRoutes = makeRoutes("/constructors", ({ router }) => {
  return router
})
export default makeConstructorsRoutes
