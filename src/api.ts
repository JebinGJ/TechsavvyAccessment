import axios, { GenericAbortSignal } from "axios";
import { storageGet } from "./commonComponent/storage";
import { userIdentity } from "./commonComponent/constants";

export const API = axios.create({
    baseURL: 'https://coreapi.hectorai.live/api'
})

export default {
    fetchPostWithBody<T = any, D = any, P = any>(url: string, body: D, params = {}, abortSignal: GenericAbortSignal | undefined = undefined) {
        return API.post<T>(url, body, {
            headers: {
                "Content-Type": "application/json",
            },
            params,
            signal: abortSignal
        })
    },

    fetchAuthPostWithBody<T = any, D = any, P = any>(url: string, body: D, params = {}, abortSignal: GenericAbortSignal | undefined = undefined) {
        return API.post<T>(url, body, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": ` Bearer ${storageGet("token")}`,
                'X-USER-IDENTITY': userIdentity
            },
            params,
            signal: abortSignal
        })
    },
}