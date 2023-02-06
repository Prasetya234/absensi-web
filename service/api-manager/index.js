import { getToken } from "~/utils/auth";
const API_PRODUCTION = "https://absensi-server-production.up.railway.app"

export class createConfig {
    getData = (opts) => {
        return {
            baseURL: API_PRODUCTION,
            url: `api/${opts.url}`,
            method: "GET",
            headers: {
                ...opts.header,
                'x-token-value': getToken(),
            },
        };
    };
    postDataLogLogin = (opts) => {
        return {
            baseURL: API_PRODUCTION,
            url: `api/login`,
            method: "POST",
            data: opts.data,
        };
    };
    postData = (opts) => {
        return {
            baseURL: API_PRODUCTION,
            url: `api/${opts.url}`,
            method: "POST",
            headers: {
                ...opts.header,
                'x-token-value': getToken(),
            },
            data: opts.data,
        };
    };
    putData = (opts) => {
        return {
            baseURL: API_PRODUCTION,
            url: `api/${opts.url}`,
            method: "PUT",
            headers: {
                ...opts.header,
                'x-token-value': getToken(),
            },
            data: opts.data,
        };
    };
    deleteData = (opts) => {
        return {
            baseURL: API_PRODUCTION,
            url: `api/${opts.url}`,
            method: "DELETE",
            headers: {
                ...opts.header,
                'x-token-value': getToken(),
            },
            data: opts.data,
        };
    };
    customableData = (opts) => {
        return {
            baseURL: API_PRODUCTION,
            url: opts.url,
            method: opts.method,
            headers: {
                ...opts.header,
                'x-token-value': getToken(),
            },
            data: opts.data,
        };
    };
}

export class responseManager {
    constructor() {
        this.manageError = (opts) => {
            return {
                ...opts.response?.data
            }
        }
    }
}