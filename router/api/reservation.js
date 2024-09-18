const { Router } = require("express");
const {
  createReservation,
  ReservationTrack,
} = require("../../controller/reservation");

const router = Router();

router.post("/make-reservation", createReservation);
router.post("/track/:id/:email", ReservationTrack);

module.exports = router;
