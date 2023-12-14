import axios from "axios";

 const api=axios.create({baseURL:"https://api.autozoneshop.uz/api"});
 const PRODUCT={
    country:"/country",
    car:"/car",
    category:"/category",
    one_product:(productID)=>`${productID}`
 }
 
 export {api,PRODUCT}