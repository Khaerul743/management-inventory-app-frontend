import { getProducts, setProducts } from "./data.js";
import { updateTables } from "../ui.js";
import { postData,deleteData,UpdateData, detailData } from "../../api/apiService.js";
import { refresh,successMessage } from "./helper.js";

export function addProduct() {
    const nama = document.getElementById("productName").value;
    const kategori = document.getElementById("productCategory").value
    const stok = document.getElementById("productStock").value;
    const harga = document.getElementById("productPrice").value;

    if(nama && kategori && stok && harga){
        successMessage("Added product is successfully")
        postData("/product",{nama,kategori,stok,harga})
        const modalElement = document.getElementById("addProductModal");
        const modalInstance = bootstrap.Modal.getInstance(modalElement); 
        modalInstance.hide();
        refresh()
    }
}

export async function editProduct(id) {
    const getData = await detailData("/product/"+id)
    const product = getData.payload.datas
    document.getElementById("id-product").value = product.id
    document.getElementById("editProductName").value = product.nama;
    document.getElementById("editProductCategory").value = product.kategori;
    document.getElementById("editProductStock").value = product.stok;
    document.getElementById("editProductPrice").value = product.harga;
}

export function updateProduct() {
    const productId = document.getElementById("id-product").value
    const nama = document.getElementById("editProductName").value;
    const kategori = document.getElementById("editProductCategory").value;
    const stok = document.getElementById("editProductStock").value;
    const harga = document.getElementById("editProductPrice").value;
    UpdateData("/product/"+productId,{nama,kategori,stok,harga})
    .then(res => {
        successMessage(res.data.payload.message)
        refresh()
    })
}

export function deleteProduct(el){
    if(el.target.classList.contains("btn-del") || el.target.classList.contains("btn-delete")){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              let productId = undefined;
              if(el.target.tagName == "BUTTON"){
                    const harga = el.target.parentElement.previousElementSibling
                    productId = harga.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
              }else{
                    const harga = el.target.parentElement.parentElement.previousElementSibling;
                    productId = harga.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
              }
              deleteData("/product/"+productId.innerText)
                  .then(res => {
                    location.reload()
                    updateTables()
                  })
            }
          });
    }
}