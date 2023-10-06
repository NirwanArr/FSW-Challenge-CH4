const express = require("express");
const router = express.Router();

const carsContoller = require("../controllers/carsController");
const pageController = require("../controllers/pageController");
const uploadFile = require("../middlewares/uploadFile");

router
  .route("/")
  .get(pageController.dashboardAdminPage);
router
  .route("/create")
  .get(pageController.createpage);
router
  .route("/edit/:id")
  .get(pageController.editPage);

router
  .route("/upload")
  .post(uploadFile.single("image"), carsContoller.createNewCar);
router
  .route("/update/:id")
  .post(uploadFile.single("image"), carsContoller.editCars);
router
  .route("/delete/:id")
  .get(carsContoller.removeCar);

module.exports = router;
