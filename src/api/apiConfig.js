import axios from "https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm"

const API_BASE_URL = "https://management-inventory-app-backend-production.up.railway.app"

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

