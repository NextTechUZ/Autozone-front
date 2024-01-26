import axios from "axios";
import {  api } from "../store/axios";

const getData = async(url)=>{
    try {
        const res = await api.get(url)
        return res.data
      } catch(error) {
       return{
        status:error.message
       }
      }
 }
 const oneProduct = async (url, id) => {
    try {
      const res = await api.get(url, id)
      return res.data
    } catch (error) {
        throw console.error("Server bilan ulanishdagi xatolik");
    }
  }
  
export async function fetchDataUnits(url, array) {
  try {
    const response = await axios.get(`https://api.autozoneshop.uz/api/${url}`);
    const data=response.data.data[array];
  return data.map((element) => ({
    ...element,
    active: false,
    value: fetch,
    to: `/products?${fetch}=${element._id}`
  }))
  } catch (error) {
    return {
      status:error.message
    }
  }
}
  export {getData,oneProduct}