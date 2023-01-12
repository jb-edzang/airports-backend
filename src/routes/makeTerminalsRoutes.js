import makeRoutes from "../makeRoutes.js"

const makeTerminalsRoutes = makeRoutes("/terminals", ({ router }) => {
  return router
})
export default makeTerminalsRoutes
