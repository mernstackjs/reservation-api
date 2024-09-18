const { Router } = require("express");

const router = Router();

const sendMailRoute = require("./api/sendmail");
const reservationRoute = require("./api/reservation");

router.use("/sendmail", sendMailRoute);
router.use("/reservation", reservationRoute);
module.exports = router;
