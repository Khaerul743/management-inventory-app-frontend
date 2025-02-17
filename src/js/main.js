import { updateTables } from "./ui.js";
import { addProduct,deleteProduct,editProduct,updateProduct } from "./modules/product.js";
import { registerHandler,loginHandler,getUserId } from "./modules/user.js";
import { getProducts } from "./modules/data.js";

const productTable = document.getElementById('productTableBody');
const userTable = document.getElementById("userTableBody")
if(productTable){
    window.editProduct = editProduct;
    window.deleteProduct = deleteProduct;
    window.updateProduct = updateProduct;
    window.updateTables = updateTables;
    window.addProduct = addProduct;
    updateTables()
    productTable.addEventListener("click",deleteProduct)

    const btnChangeRole = document.getElementById("change-role");
    window.btnChangeRole = btnChangeRole
    window.getProducts = getProducts
    window.userTable = userTable;
    userTable.addEventListener("click",getUserId)
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