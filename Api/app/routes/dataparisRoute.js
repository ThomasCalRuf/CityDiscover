module.exports = (server) => {
    const dataparisController = require("../controllers/dataparisController");

    server.get("/paris", dataparisController.getAllDataParis)
    .post("/paris", dataparisController.createDataParis)
    .get("/paris/:id", dataparisController.getDataParisById)
    .put("paris/:id", dataparisController.updateDataParis)
    .delete("paris/:id", dataparisController.deleteDataParis);

}