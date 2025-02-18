import { getData } from "../../api/apiService.js";
import { getOrders } from "./data.js";

export const formatOrders = async () => {
    const orders = await getOrders;

    // Gunakan map untuk menangani async operation dalam loop
    const updatedOrders = await Promise.all(
        orders.map(async (order) => {
            const userId = order.userId
            const productId = order.productId;
            const getProduct = await getData("/product/" + productId);
            const getUser = await getData("/user/"+userId)
            const productName = getProduct.data.payload.datas.nama;
            const userEmail = getUser.data.payload.datas.email
            return { ...order, productName,userEmail }; // Mengembalikan order dengan productName baru
        })
    );

    return updatedOrders;
};