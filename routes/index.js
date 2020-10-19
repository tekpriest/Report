const express = require("express");

const user = require("./user");
const cases = require("./case");
const organization = require("./organization");
const progress = require("./progress");
const error = require("../controllers/errors");

const appicationError = require('../utils/applicationError');

const router = express.Router();

router.use("/user", user);
router.use("/case", cases);
router.use("/organization", organization);
router.use("/progress", progress);
// router.use("/request", request);
router.all("*", error.globalErrors);

router.use(appicationError);

module.exports = router;
