import { postData,getData,UpdateData,deleteData } from "../../api/apiService.js";
import { deleteMessage, errorMessage,refresh,successMessage,confirmMessage } from "./helper.js";

export const registerHandler = async (el) => {
    el.preventDefault()
    const name = document.getElementById("userName").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const response = await postData("/auth/register",{name,email,password})
    if(response.data.payload.status === 200) {
        return window.location.href = "../public/login.html"
    }
    const errMessage = response.data.payload.message;
    return errorMessage(errMessage);
}

export const loginHandler = async (el) => {
    el.preventDefault();
    const email = document.getElementById("emailUser").value
    const password = document.getElementById("passwordUser").value;

    const response = await postData("/auth/login",{email,password})
    if(response.data.payload.status === 200){
        const getRole = await getUserRole()
        if(getRole == "customer") return window.location.href = "../public/login.html"
        else return window.location.href = "../public/index.html"
    }
    return errorMessage(response.data.payload.message);
}

export const getUserId = async (el) => {
    const getRole = await getUserRole()
    if(getRole != "admin") return errorMessage("Only Admin");
    if(el.target.classList.contains("btn-change-role") || el.target.classList.contains("fa-edit")){
        let id = undefined
        el.target.tagName === "BUTTON" ? id = el.target.previousElementSibling.value
        : id = el.target.parentElement.previousElementSibling.value

        const btnChangeRole = document.getElementById("change-role");
        btnChangeRole.addEventListener("click",async () => {
            const selectedRole = document.querySelector("input[name='editUserRole']:checked");
            const userRole = {role:selectedRole.value}
            const updateRole = await UpdateData("/user/"+id,userRole)
            successMessage(updateRole.data.payload.message)
            return refresh()
        })
    }
}

export const getUserRole = async () => {
    const getUserProfile = await getData("/user/profile")
    return getUserProfile.data.payload.datas.role
}

export const deleteUser = (el) => {
    if(el.target.classList.contains("btn-delete") || el.target.classList.contains("btn-del")){
        confirmMessage("You won't be able to revert this!")
        .then(async result => {
            if(result.isConfirmed){
                let userId = undefined;
                if(el.target.tagName == "BUTTON"){
                    userId = el.target.previousElementSibling.previousElementSibling.value
                }else{
                    userId = el.target.parentElement.previousElementSibling.previousElementSibling.value
                }
                const deletedUser = await deleteData("/user/"+userId)
                const status = deletedUser.data.payload.status
                if(status == 200){
                    deleteMessage("User has been Deleted");
                    return refresh()
                }
                return errorMessage("Something Wrong!")
            }
        })
    }
}