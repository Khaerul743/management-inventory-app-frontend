import { api } from "./apiConfig.js";
import { errorMessage } from "../js/modules/helper.js";

export const login = async (endPoint,data) => {
    try {
        const response = await api({
            url:endPoint,
            method:"POST",
            data:data,
            withCredentials:true,
        })
        return response
    } catch (error) {
        return errorMessage("Login gagal")
    }
}

export const getData = async (endPoint) => {
    try {
        const response = await api({
            url:endPoint,
            method:"GET",
            withCredentials:true
        })
        return response
    } catch (error) {  
        return error.response
    }
}

export const postData = async (endPoint,data) => {
    try {
        const response = await api({
            url:endPoint,
            method:"POST",
            data:data,
            withCredentials:true
        })
        return response
    } catch (error) {
        return errorMessage("Something Wrong!")
    }
}

export const deleteData = async (endPoint) => {
    try {
        const response = await api({
            url:endPoint,
            method:"DELETE",
            withCredentials:true
        })
        return response;
    } catch (error) {
        return errorMessage("Gagal menghapus data")
    }
}

export const UpdateData = async (endPoint,data) => {
    try {
        const response = await api({
            url:endPoint,
            method:"PUT",
            data:data,
            withCredentials:true
        })
        return response
    } catch (error) {
        return errorMessage("Gagal update data")
    }
}

export const detailData = async (endPoint) => {
    try {
        const response = await api({
            url:endPoint,
            method:"GET",
            withCredentials:true
        })
        return response.data
    } catch (error) {
        return console.log(error)
    }
}