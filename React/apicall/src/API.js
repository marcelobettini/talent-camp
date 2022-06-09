import axios from "axios";
//creamos nuestro Singleton
export const API = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
});