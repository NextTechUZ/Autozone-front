import { api } from "../store/axios";

const getData = async(url)=>{
    try {
        const res = await api.get(url)
        return res.data
      } catch {
        throw console.error("Server bilan ulanishdagi xatolik");
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
  export {getData,oneProduct}