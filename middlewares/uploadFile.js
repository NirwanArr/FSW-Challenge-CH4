const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images-upload/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Not an image! Please upload only image!', 400), false);
    }
};

const limits = { fileSize: 5 * 1024 * 1024 };

const uploadFile = multer({ storage, fileFilter, limits });

module.exports = uploadFile;