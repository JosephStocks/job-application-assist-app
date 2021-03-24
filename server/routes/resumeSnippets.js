const express = require("express");
const router = express.Router();

// get all
router.get("/", (req, res) => {});

// get one
router.get("/:id", (req, res) => {});

// create one
router.post("/", (req, res) => {});

// updating one | using patch because when updated only sending what changes
router.patch("/:id", (req, res) => {});

// deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
