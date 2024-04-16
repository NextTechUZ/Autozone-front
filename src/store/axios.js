import axios from "axios";

 const api=axios.create({baseURL:process.env.REACT_APP_BASE_API});
 const PRODUCT={
    country:"/country",
    car:"/car",
    category:"/category",
    product:"/product",
    one_product:(productID)=>`/product/${productID}`
 }
 
 export {api,PRODUCT}