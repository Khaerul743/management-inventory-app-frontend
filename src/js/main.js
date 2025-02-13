import { updateTables } from "./ui.js";
import { addProduct,editProduct,updateProduct } from "./product.js";

updateTables()
window.addProduct = addProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;