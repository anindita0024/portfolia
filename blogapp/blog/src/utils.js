
import axios from 'axios'



export const axiosInstance = axios.create({
    baseURL : "https://fullblogg.herokuapp.com/api/"
})