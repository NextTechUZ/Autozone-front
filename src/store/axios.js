import axios from "axios";

 const api=axios.create({baseURL:process.env.REACT_APP_BASE_API});
 const PRODUCT={
    country:"/country",
    car:"/car",
    category:"/category",
    one_product:(productID)=>`${productID}`
 }
 
 export {api,PRODUCT}