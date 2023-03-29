import { initMongoose } from "../../../lib/mongoose";
import Product from "../../../models/Product"; 

export default async function handle(req, res) {
  try {
    await initMongoose();
    const products = await Product.find().exec();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error de servidor" });
  }
}

