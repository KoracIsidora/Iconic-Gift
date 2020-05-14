const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Item model
const Item = require("../../models/Item");

// Create routes
// @route Get api/items
// @desc Get all items/gifts
// @access Public

// Fetch all items form DB
router.get("/", (req, res) => {
  Item.find()
    .sort({ title: 1 })
    .then((items) => res.json(items));
});

// Create routes
// @route Post api/items
// @desc Create items/gifts
// @access Private

// Adding items to database
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    description: req.body.description,
    picture: {
      data: req.body.picture,
      contentType: "image/png",
    },
  });

  // newItem.picture.data = fs.readFileSync(req.files.picture.path);
  // newItem.picture.contentType = "image/png";

  newItem.save().then((item) => res.json(item));
});

// Create routes
// @route Delete api/items
// @desc delete items/gifts
// @access Private

// Deleting items from database
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// Update item
// @route Update api/items
// @desc update items/gifts
// @access Public
router.put("/:id", (req, res) => {
  Item.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Item.findOne({ _id: req.params.id }).then(function (item) {
        res.send(item);
      });
    })
    .catch((err) => res.status(404).json({ msg: "Item not updated" }));
});

module.exports = router;
