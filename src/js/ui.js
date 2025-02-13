import { products, users, orders } from "./data.js";

export function updateTables() {
    const productTableBody = document.getElementById("productTableBody");
    const userTableBody = document.getElementById("userTableBody");
    const orderTableBody = document.getElementById("orderTableBody");

    productTableBody.innerHTML = "";
    products.forEach(product => {
        productTableBody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.stock}</td>
                <td>${product.price}</td>
                <td>
                    <button class="btn-action btn-edit" data-bs-toggle="modal" data-bs-target="#editProductModal" onclick="editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteProduct(${product.id})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    userTableBody.innerHTML = "";
    users.forEach(user => {
        userTableBody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
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
