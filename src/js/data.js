import { getData } from "../api/apiService.js";

export let getProducts = getData('/product').then(res => res.data.payload.datas);

export let users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
];

export let orders = [
    { orderId: 1, customer: "John Doe", product: "Product A", quantity: 2, status: "Pending" },
    { orderId: 2, customer: "Jane Smith", product: "Product B", quantity: 1, status: "Completed" },
];

// Fungsi buat update data di modul lain
export function setProducts(newProducts) {
    getProducts = newProducts;
}
