import { products, setProducts } from "./data.js";
import { updateTables } from "./ui.js";

// export function addProduct() {
//     const productName = document.getElementById("productName").value;
//     const productStock = document.getElementById("productStock").value;
//     const productPrice = document.getElementById("productPrice").value;

//     const newProduct = {
//         id: products.length + 1,
//         name: productName,
//         stock: parseInt(productStock),
//         price: parseFloat(productPrice),
//     };

//     setProducts([...products, newProduct]); // Update data
//     updateTables(); // Refresh tampilan

//     document.getElementById("addProductForm").reset();
//     $('#addProductModal').modal('hide');
// }

export function addProduct() {
    alert("hello")
}

export function editProduct(id) {
    const product = products.find(p => p.id === id);
    document.getElementById("editProductId").value = product.id;
    document.getElementById("editProductName").value = product.name;
    document.getElementById("editProductStock").value = product.stock;
    document.getElementById("editProductPrice").value = product.price;
}

export function updateProduct() {
    const productId = document.getElementById("editProductId").value;
    const productName = document.getElementById("editProductName").value;
    const productStock = document.getElementById("editProductStock").value;
    const productPrice = document.getElementById("editProductPrice").value;

    const updatedProducts = products.map(p =>
        p.id == productId ? { ...p, name: productName, stock: parseInt(productStock), price: parseFloat(productPrice) } : p
    );

    setProducts(updatedProducts);
    updateTables();
    $('#editProductModal').modal('hide');
}

export function deleteProduct(id) {
    setProducts(products.filter(p => p.id !== id));
    updateTables();
}