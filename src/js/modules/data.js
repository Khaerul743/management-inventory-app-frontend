import { getData } from "../../api/apiService.js";

export const getProducts = getData('/product').then(res => res.data.payload.datas)

export const getUsers = getData("/user").then(res => res.data.payload.datas)

export const getOrders = getData("/order").then(res => res.data.payload.datas)

// Fungsi buat update data di modul lain
export function setProducts(newProducts) {
    getProducts = newProducts;
}
