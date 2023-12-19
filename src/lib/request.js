import axios from "axios";

export class Request {
    constructor( baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(url){
        return await axios.get(this.baseUrl + url, {headers: {'ngrok-skip-browser-warning': true,}});
    }

    async post(url, data){
        return await axios.post(this.baseUrl + url, data, {headers: {'ngrok-skip-browser-warning': true,}});
    }
    async delete(url, data){
        return await axios.delete(this.baseUrl + url, data, {headers: {'ngrok-skip-browser-warning': true,}});
    }
}