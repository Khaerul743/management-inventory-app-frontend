import {getProducts,getUsers,orders } from "./modules/data.js";

export async function updateTables() {
    const productTableBody = document.getElementById("productTableBody");
    const userTableBody = document.getElementById("userTableBody");
    const orderTableBody = document.getElementById("orderTableBody");

    productTableBody.innerHTML = "";
    const products = await getProducts
    products.forEach(product => {
        productTableBody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.nama}</td>
                <td>${product.kategori}</td>
                <td>${product.stok}</td>
                <td>${product.harga}</td>
                <td>
                    <button class="btn-action btn-edit" data-bs-toggle="modal" data-bs-target="#editProductModal" onclick="editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-action btn-delete">
                        <i class="fas btn-del fa-trash-alt" id="button-delete"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    userTableBody.innerHTML = "";
    const users = await getUsers;
    users.forEach(user => {
        userTableBody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <data value="${user.id}"></data>
                    <button class="btn-action btn-edit btn-change-role" data-bs-toggle="modal" data-bs-target="#editUserModal" >
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    orderTableBody.innerHTML = "";
    orders.forEach(order => {
        orderTableBody.innerHTML += `
            <tr>
                <td>${order.orderId}</td>
                <td>${order.customer}</td>
                <td>${order.product}</td>
                <td>${order.quantity}</td>
                <td><span class="status-badge ${order.status === "Pending" ? "status-pending" : "status-completed"}">${order.status}</span></td>
            </tr>
        `;
    });

    document.getElementById("totalProducts").innerText = products.length;
    document.getElementById("totalUsers").innerText = users.length;
    document.getElementById("totalOrders").innerText = orders.length;
}
