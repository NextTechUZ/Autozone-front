import { myAxios } from "../utils/myAxios"

export const FetchData=(url)=>{
    return  myAxios.get(url).then(el=>el)
  }