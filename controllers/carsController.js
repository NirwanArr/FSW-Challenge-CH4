const Cars = require("../models/carsModel");

const createNewCar = async (req, res) => {
  try {

    const { name, price, category } = req.body;
    const image = req.file.filename;

    const car = new Cars({
      name,
      price,
      category,
      image
    });
    await car.save();
    req.flash("message", "Created");
    res.redirect("/");
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message
    });
  }
};

const editCars = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, category } = req.body;

    const existingData = await Cars.findById(id);
    const newImage = req.file ? req.file.filename : existingData.image;

    await Cars.findByIdAndUpdate(
      id,
      {
        name,
        price,
        category,
        image: newImage,
      },
      {
        new: true,
      }
    );

    req.flash("message", "Updated");
    res.redirect("/");
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: error.message,
    });
  }
};

const removeCar = async (req, res) => {
  try {
    await Cars.findByIdAndRemove(req.params.id);
    req.flash("message", "Deleted");
    res.redirect("/");
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};


module.exports = {
  createNewCar,
  editCars,
  removeCar,
};
