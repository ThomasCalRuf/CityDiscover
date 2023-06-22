module.exports = (server) => {
    const planningController = require("../controllers/planingController");

    server.get("/planning", planningController.getAllPlannings)
    .post("/planning", planningController.createPlanning)
    .get("/planning/:id", planningController.getPlanningById)
    .put("planning/:id", planningController.updatePlanning)
    .delete("planning/:id", planningController.deletePlanning);

}