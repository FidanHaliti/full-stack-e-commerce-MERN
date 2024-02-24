const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog.js");

// Yeni bir kategori oluşturma (Create)
router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newBlog = new Blog({ name, img });
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Tüm kategorileri getirme (Read - All)
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Belirli bir kategoriyi getirme (Read - Single)
router.get("/:blogId", async (req, res) => {
  try {
    const blogId = req.params.blogId;

    try {
      const blog = await Blog.findById(blogId);

      res.status(200).json(blog);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Category not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Kategori güncelleme (Update)
router.put("/:blogId", async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const updates = req.body;

    const existingBlog = await Blog.findById(blogId);

    if (!existingBlog) {
      return res.status(404).json({ error: "Category not found." });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(blogId, updates, {
      new: true,
    });

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Kategori silme (Delete)
router.delete("/:blogId", async (req, res) => {
  try {
    const blogId = req.params.blogId;

    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Category not found." });
    }

    res.status(200).json(deletedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
