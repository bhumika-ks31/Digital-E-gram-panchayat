const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// Get all applications for a user
router.get("/:userId", async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.params.userId });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
