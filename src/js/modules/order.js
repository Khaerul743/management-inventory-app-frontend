import { getData,UpdateData,deleteData } from "../../api/apiService.js";
import { getOrders } from "./data.js";
import { getUserRole } from "./user.js";
import { successMessage,confirmMessage,deleteMessage,refresh } from "./helper.js";

export const formatOrders = async () => {
    const orders = await getOrders;

    // Ambil semua produk & user dalam satu request
    const [productsData, usersData] = await Promise.all([
        getData("/product"),
        getData("/user")
    ]);

    const products = productsData.data.payload.datas;
    const users = usersData.data.payload.datas;

    // Buat Map untuk pencarian cepat
    const productMap = new Map(products.map(product => [product.id, product.nama]));
    const userMap = new Map(users.map(user => [user.id, user.email]));

    // Gabungkan order dengan productName & userEmail
    const updatedOrders = orders.map(order => ({
        ...order,
        productName: productMap.get(order.productId) || "Unknown Product",
        userEmail: userMap.get(order.userId) || "Unknown User"
    }));

    return updatedOrders;
};

export const updateStatus = async (el) => {
    const getRole = await getUserRole()
    if(getRole != "admin") return errorMessage("Only Admin");
    if(el.target.classList.contains("btn-change-order") || el.target.classList.contains("fa-edit")){
        let id = undefined
        el.target.tagName === "BUTTON" ? id = el.target.previousElementSibling.value
        : id = el.target.parentElement.previousElementSibling.value

        const btnChangeStatus = document.getElementById("change-status");
        btnChangeStatus.addEventListener("click",async () => {
            const selectedStatus = document.querySelector("input[name='editOrderStatus']:checked");
            const status = {status:selectedStatus.value}
            const updateRole = await UpdateData("/order/"+id,status)
            successMessage(updateRole.data.payload.message)
            return refresh()
        })
    }
}

export const deleteOrder = (el) => {
    if(el.target.classList.contains("btn-delete") || el.target.classList.contains("btn-del")){
        confirmMessage("You won't be able to revert this!")
        .then(async result => {
            if(result.isConfirmed){
                let orderId = undefined;
                if(el.target.tagName == "BUTTON"){
                    orderId = el.target.previousElementSibling.previousElementSibling.value
                }else{
                    orderId = el.target.parentElement.previousElementSibling.previousElementSibling.value
                }
                const deletedOrder = await deleteData("/order/"+userId)
                const status = deletedOrder.data.payload.status
                if(status == 200){
                    deleteMessage("Order has been Deleted");
                    return refresh()
                }
                return errorMessage("Something Wrong!")
            }
        })
    }
}