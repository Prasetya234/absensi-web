import { API_PRODUCTION } from "~/utils/api";
import { getToken } from "~/utils/auth";

const KEY_TOKEN = "Microservice "

export class createConfig {
    constructor() {
        this.getData = (opts) => {
            return {
                baseURL: API_PRODUCTION,
                url: `api/${opts.url}`,
                method: "GET",
                params: opts.params,
                headers: {
                    ...opts.header,
                    'x-token-value': KEY_TOKEN + getToken(),
                },
            };
        };
        this.postDataLogLogin = (opts) => {
            return {
                baseURL: API_PRODUCTION,
                url: `api/login`,
                method: "POST",
                data: opts.data,
            };
        };
        this.postData = (opts) => {
            return {
                baseURL: API_PRODUCTION,
                url: `api/${opts.url}`,
                method: "POST",
                headers: {
                    ...opts.header,
                    'x-token-value': KEY_TOKEN + getToken(),
                },
                data: opts.data,
            };
        };
        this.putData = (opts) => {
            return {
                baseURL: API_PRODUCTION,
                url: `api/${opts.url}`,
                method: "PUT",
                headers: {
                    ...opts.header,
                    'x-token-value': KEY_TOKEN + getToken(),
                },
                data: opts.data,
            };
        };
        this.deleteData = (opts) => {
            return {
                baseURL: API_PRODUCTION,
                url: `api/${opts.url}`,
                method: "DELETE",
                headers: {
                    ...opts.header,
                    'x-token-value': KEY_TOKEN + getToken(),
                },
                data: opts.data,
            };
        };
        this.customableData = (opts) => {
            return {
                baseURL: API_PRODUCTION,
                url: opts.url,
                method: opts.method,
                headers: {
                    ...opts.header,
                    'x-token-value': KEY_TOKEN + getToken(),
                },
                data: opts.data,
            };
        };
    }
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