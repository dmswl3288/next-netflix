import axios, { AxiosRequestConfig, Method, AxiosRequestHeaders } from "axios"
import _ from "lodash"

interface apiDataType {
    url?: string
    method?: Method
    headers?: AxiosRequestHeaders
    data?: any
}

export const BASE_URL = `https://api.themoviedb.org/3`
export const IMAGE_BASE_URL = `http://image.tmdb.org/t/p/original`

class Api {
    callApi({ url, method, data}: apiDataType) {
        const accessToken = localStorage.getItem("accessToken")
        const headers: AxiosRequestHeaders = 
            _.isNull(accessToken) || _.isUndefined(accessToken)
                ?   { "Content-Type": "application/json" }
                :   {
                        Authorization: `${accessToken}`,
                        "Content-Type": "application/json",
                }
        const requestParam: AxiosRequestConfig = {
            url,
            method,
            headers: headers || {},
            data
        }
        return axios(requestParam)
    }
}

export const api = new Api()