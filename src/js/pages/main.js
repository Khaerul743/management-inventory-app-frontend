import { updateTables } from "../modules/ui.js";
import { addProduct,deleteProduct,editProduct,updateProduct } from "../modules/product.js";
import { registerHandler,loginHandler,getUserId,deleteUser } from "../modules/user.js";
import { updateStatus,deleteOrder } from "../modules/order.js";

const productTable = document.getElementById('productTableBody');
const userTable = document.getElementById("userTableBody")
const orderTable = document.getElementById("orderTableBody")
if(productTable){
    //Product
    window.editProduct = editProduct;
    window.deleteProduct = deleteProduct;
    window.updateProduct = updateProduct;
    window.updateTables = updateTables;
    window.addProduct = addProduct;
    updateTables()
    productTable.addEventListener("click",deleteProduct)

    //User
    const btnChangeRole = document.getElementById("change-role");
    window.btnChangeRole = btnChangeRole
    window.userTable = userTable;
    userTable.addEventListener("click",getUserId)
    userTable.addEventListener("click",deleteUser)

    //Order
    orderTable.addEventListener("click",updateStatus)
    orderTable.addEventListener("click",deleteOrder)
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