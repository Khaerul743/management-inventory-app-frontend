import { api } from "./apiConfig.js";

export const getData = async (endPoint,params = {}) => {
    try {
        const response = await api.get(endPoint,{params})
        return response
    } catch (error) {  
        return console.log("error saat ambil data");
    }
}

export const postData = async (endPoint,data) => {
    try {
        const response = await api({
            url:endPoint,
            method:"POST",
            data:data
        })
        return response
    } catch (error) {
        return console.log(error)
    }
}

export const deleteData = async (endPoint) => {
    try {
        const response = await api({
            url:endPoint,
            method:"DELETE",
        })
        return response;
    } catch (error) {
        return console.log(error)
    }
}

export const UpdateData = async (endPoint,data) => {
    try {
        const response = await api({
            url:endPoint,
            method:"PUT",
            data:data
        })
        return response
    } catch (error) {
        return console.log(error)
    }
}

export const detailData = async (endPoint) => {
    try {
        const response = await api({
            url:endPoint,
            method:"GET",
        })
        return response.data
    } catch (error) {
        return console.log(error)
    }
}