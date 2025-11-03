import { BACKEND_URL } from "@/config"
import axios from "axios"

export const getAllList = async () => {
    try {
        console.log("start get all list")
        const response = await axios.post(`${BACKEND_URL}/token/getList`);
        // Handle successful response
        return response.data;

    } catch (error) {
        console.log(error);

    }
}