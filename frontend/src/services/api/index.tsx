import { API_ENDPOINT } from "@/constants";
import axios from "axios";


export const axiosInstance = axios.create({baseURL: API_ENDPOINT})