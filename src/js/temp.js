        // let products = [];
        // let users = [];
        // let orders = [];

        // // Dummy function to populate data and initialize
        // function loadData() {
        //     products = [
        //         { id: 1, name: "Product A", stock: 100, price: 15 },
        //         { id: 2, name: "Product B", stock: 200, price: 25 },
        //     ];
        //     users = [
        //         { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        //         { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        //     ];
        //     orders = [
        //         { orderId: 1, customer: "John Doe", product: "Product A", quantity: 2, status: "Pending" },
        //         { orderId: 2, customer: "Jane Smith", product: "Product B", quantity: 1, status: "Completed" },
        //     ];

        //     updateTables();
        // }

        // function updateTables() {
        //     const productTableBody = document.getElementById("productTableBody");
        //     const userTableBody = document.getElementById("userTableBody");
        //     const orderTableBody = document.getElementById("orderTableBody");

        //     productTableBody.innerHTML = "";
        //     products.forEach(product => {
        //         productTableBody.innerHTML += `
        //             <tr>
        //                 <td>${product.id}</td>
        //                 <td>${product.name}</td>
        //                 <td>${product.stock}</td>
        //                 <td>${product.price}</td>
        //                 <td>
        //                     <button class="btn-action btn-edit" data-bs-toggle="modal" data-bs-target="#editProductModal" onclick="editProduct(${product.id})">
        //                         <i class="fas fa-edit"></i>
        //                     </button>
        //                     <button class="btn-action btn-delete" onclick="deleteProduct(${product.id})">
        //                         <i class="fas fa-trash-alt"></i>
        //                     </button>
        //                 </td>
        //             </tr>
        //         `;
        //     });

        //     userTableBody.innerHTML = "";
        //     users.forEach(user => {
        //         userTableBody.innerHTML += `
        //             <tr>
        //                 <td>${user.id}</td>
        //                 <td>${user.name}</td>
        //                 <td>${user.email}</td>
        //                 <td>${user.role}</td>
        //                 <td>
        //                     <button class="btn-action btn-edit">
        //                         <i class="fas fa-edit"></i>
        //                     </button>
        //                     <button class="btn-action btn-delete">
        //                         <i class="fas fa-trash-alt"></i>
        //                     </button>
        //                 </td>
        //             </tr>
        //         `;
        //     });

        //     orderTableBody.innerHTML = "";
        //     orders.forEach(order => {
        //         orderTableBody.innerHTML += `
        //             <tr>
        //                 <td>${order.orderId}</td>
        //                 <td>${order.customer}</td>
        //                 <td>${order.product}</td>
        //                 <td>${order.quantity}</td>
        //                 <td><span class="status-badge ${order.status === "Pending" ? "status-pending" : "status-completed"}">${order.status}</span></td>
        //             </tr>
        //         `;
        //     });

        //     document.getElementById("totalProducts").innerText = products.length;
        //     document.getElementById("totalUsers").innerText = users.length;
        //     document.getElementById("totalOrders").innerText = orders.length;
        // }

        // // Add Product
        // function addProduct() {
        //     const productName = document.getElementById("productName").value;
        //     const productStock = document.getElementById("productStock").value;
        //     const productPrice = document.getElementById("productPrice").value;
        //     const newProduct = {
        //         id: products.length + 1,
        //         name: productName,
        //         stock: parseInt(productStock),
        //         price: parseFloat(productPrice),
        //     };
        //     products.push(newProduct);
        //     updateTables();
        //     document.getElementById("addProductForm").reset();
        //     $('#addProductModal').modal('hide');
        // }

        // // Edit Product
        // function editProduct(id) {
        //     const product = products.find(p => p.id === id);
        //     document.getElementById("editProductId").value = product.id;
        //     document.getElementById("editProductName").value = product.name;
        //     document.getElementById("editProductStock").value = product.stock;
        //     document.getElementById("editProductPrice").value = product.price;
        // }

        // function updateProduct() {
        //     const productId = document.getElementById("editProductId").value;
        //     const productName = document.getElementById("editProductName").value;
        //     const productStock = document.getElementById("editProductStock").value;
        //     const productPrice = document.getElementById("editProductPrice").value;

        //     const product = products.find(p => p.id == productId);
        //     product.name = productName;
        //     product.stock = parseInt(productStock);
        //     product.price = parseFloat(productPrice);

        //     updateTables();
        //     $('#editProductModal').modal('hide');
        // }

        // // Delete Product
        // function deleteProduct(id) {
        //     products = products.filter(p => p.id !== id);
        //     updateTables();
        // }

        // // Initialize Data
        // loadData();

        import { updateTables } from "./ui.js";
        import { addProduct, updateProduct } from "./product.js";
        
        // Load data awal
        updateTables();
        
        // Event listener untuk tambah produk
        document.getElementById("addProductModal").addEventListener("submit", function (e) {
            e.preventDefault();
            window.addProduct = addProduct;
            addProduct();
        });
        
        // Event listener untuk update produk
        document.getElementById("editProductModal").addEventListener("submit", function (e) {
            e.preventDefault();
            window.updateProduct = updateProduct
            updateProduct();
        });