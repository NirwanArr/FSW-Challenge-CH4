const express = require("express");
const router = express.Router();

const carsContoller = require("../controllers/carsController");
const pageController = require("../controllers/pageController");
const upload = require("../middlewares/uploader");

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
  .post(upload.single("image"), carsContoller.createNewCar);
router
  .route("/update/:id")
  .post(upload.single("image"), carsContoller.editCars);
router
  .route("/delete/:id")
  .get(carsContoller.removeCar);

module.exports = router;
