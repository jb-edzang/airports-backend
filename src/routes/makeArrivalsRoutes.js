import makeRoutes from "../makeRoutes.js"

const makeArrivalsRoutes = makeRoutes("/arrivals", ({ router }) => {
  // CREATE
  // router.post("/", validate(), async(req, res), res.send())
  // // READ collection
  // router.get("/", validate(), async(req, res), res.send())
  // // READ single
  // router.get("/", validate(), async(req, res), res.send())
  // // UPDATE partial
  // router.patch("/", validate(), async(req, res), res.send())
  // // DELETE
  // router.delete("/", validate(), async(req, res), res.send())

  return router
})
export default makeArrivalsRoutes
