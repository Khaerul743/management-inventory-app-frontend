import { postData,getData } from "../../api/apiService.js";
import { errorMessage } from "./helper.js";

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

export const getUserRole = async () => {
    const getUserProfile = await getData("/user/profile")
    return getUserProfile.data.payload.datas.role
}