import { getData } from "../../api/apiService.js";
import { getOrders } from "./data.js";

export const formatOrders = async () => {
    const orders = await getOrders;

    // Gunakan map untuk menangani async operation dalam loop
    const updatedOrders = await Promise.all(
        orders.map(async (order) => {
            const productId = order.productId;
            const getProduct = await getData("/product/" + productId);
            const productName = getProduct.data.payload.datas.nama;

            return { ...order, productName }; // Mengembalikan order dengan productName baru
        })
    );

    return updatedOrders;
};