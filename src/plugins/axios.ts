import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import store from "@/store";

const axios = Axios.create({
    baseURL: process.env.API_URL || "http://localhost:8080/api",
});

axios.interceptors.request.use(function (request: AxiosRequestConfig){
    const token = store.getters.token;

    if(token){
        request.headers['Authorization'] = "Bearer " + token;
    }

    return request;
});

axios.interceptors.response.use((response: AxiosResponse) => response, (error: any) => {
    if(error.status){
        if(error.status === 401){
            store.dispatch('logout');
        }
    }

    return error;
});

export default axios;