import makeRoutes from "../makeRoutes.js"

const makeGatesRoutes = makeRoutes("/gates", ({ router }) => {
  return router
})
export default makeGatesRoutes
