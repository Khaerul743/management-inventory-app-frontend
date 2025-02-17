import { updateTables } from "./ui.js";
import { addProduct,deleteProduct,editProduct,updateProduct } from "./modules/product.js";
import { registerHandler,loginHandler,getUserRole } from "./modules/user.js";
import { getProducts } from "./modules/data.js";
import { getData } from "../api/apiService.js";
const productTable = document.getElementById('productTableBody');

if(productTable){
    window.editProduct = editProduct;
    window.deleteProduct = deleteProduct;
    window.updateProduct = updateProduct;
    window.updateTables = updateTables;
    window.addProduct = addProduct;
    updateTables()
    productTable.addEventListener("click",deleteProduct)
    window.getProducts = getProducts
}

const btnRegister = document.getElementById("btn-register")
if(btnRegister){
    window.btnRegister = btnRegister
    window.registerHandler = registerHandler
    btnRegister.addEventListener("click",registerHandler)
}

const btnLogin = document.getElementById("btn-login");
if(btnLogin){
    window.btnLogin = btnLogin;
    btnLogin.addEventListener("click",loginHandler)
}