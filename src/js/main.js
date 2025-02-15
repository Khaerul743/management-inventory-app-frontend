import { updateTables } from "./ui.js";
import { addProduct,deleteProduct,editProduct,updateProduct } from "./product.js";
import { getData } from "../api/apiService.js";

window.updateTables = updateTables;
window.addProduct = addProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;
// window.getProducts = getProducts
updateTables()

const productTable = document.getElementById('productTableBody');
productTable.addEventListener("click",deleteProduct)
