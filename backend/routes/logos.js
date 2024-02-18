const express = require("express");
const router = express.Router();
const Logo = require("../models/Logo.js");

// Yeni bir kategori oluşturma (Create)
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newLogo = new Logo({ name, img });
    await newLogo.save();

    res.status(201).json(newLogo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Tüm kategorileri getirme (Read - All)
router.get("/", async (req, res) => {
  try {
    const logos = await Logo.find();

    res.status(200).json(logos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Belirli bir kategoriyi getirme (Read - Single)
router.get("/:logoId", async (req, res) => {
  try {
    const logoId = req.params.logoId;

    try {
      const logo = await Logo.findById(logoId);

      res.status(200).json(logo);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Logo not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Kategori güncelleme (Update)
router.put("/:logoId", async (req, res) => {
  try {
    const logoId = req.params.logoId;
    const updates = req.body;

    const existingLogo = await Logo.findById(logoId);

    if (!existingLogo) {
      return res.status(404).json({ error: "Logo not found." });
    }

    const updatedLogo = await Logo.findByIdAndUpdate(logoId, updates, {
      new: true,
    });

    res.status(200).json(updatedLogo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Kategori silme (Delete)
router.delete("/:logoId", async (req, res) => {
  try {
    const logoId = req.params.logoId;

    const deletedLogo = await Logo.findByIdAndRemove(logoId);

    if (!deletedLogo) {
      return res.status(404).json({ error: "Logo not found." });
    }

    res.status(200).json(deletedLogo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
