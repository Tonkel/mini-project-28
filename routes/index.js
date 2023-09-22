const apiRouter = require("express").Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require("./tips");
const feedbackRouter = require("./feedback");
// TODO: import your diagnostics route
const diagnosticsRouter = require(`./diagnostics`);

apiRouter.use("/tips", tipsRouter);
apiRouter.use("/feedback", feedbackRouter);
// TODO: Initialize diagnostics route
apiRouter.use("/diagnostics", diagnosticsRouter);

module.exports = apiRouter;
