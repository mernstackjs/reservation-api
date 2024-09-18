const { Router } = require("express");
const { sendMail } = require("../../utility/sendmail");

const router = Router();

router.post("/sendmail", async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    if (!to || !subject || !html) {
      return res
        .status(400)
        .json({ message: "Missing required fields (to, subject, html)" });
    }

    const info = await sendMail(to, subject, html);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
