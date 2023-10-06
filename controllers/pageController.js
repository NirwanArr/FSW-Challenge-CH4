const Cars = require("../models/carsModel");

const dashboardAdminPage = async (req, res) => {
    try {
        const { category, name } = req.query;

        let filter = {};

        if (category) {
            filter.category = category;
        }

        if (name) {
            filter.name = {
                $regex: name,
                $options: "i",
            };
        }

        const car = await Cars.find(filter);
        res.render("index.ejs", {
            category,
            car,
            message: req.flash("message", ""),
        });
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: error.message,
        });
    }
};

const createpage = async (req, res) => {
    try {
        res.render("create");
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message,
        });
    }
};

const editPage = async (req, res) => {
    try {
        const car = await Cars.findById(req.params.id);
        res.render("edit", {
            car,
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message,
        });
    }
};

module.exports = {
    dashboardAdminPage,
    createpage,
    editPage
};