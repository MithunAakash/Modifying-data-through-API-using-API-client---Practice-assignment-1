// routes/productRoutes.js or inside index.js
const Product = require('../models/product');

app.put("/products/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated doc
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
