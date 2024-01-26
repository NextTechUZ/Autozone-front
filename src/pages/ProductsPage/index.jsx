import React  from 'react'
import styles from "./index.module.scss"
import Title from '../../components/Title'
import Showcase from '../../components/section/Showcase'
import {
  dropData,
  price,
  showcaseData
} from '../../store/store'
import NavigationStatus from '../../components/section/NavigationStatus'
import ProductsMain from '../../components/section/ProductsMain'
import {
  api
} from '../../store/axios'
import {
  useQuery
} from 'react-query'
import Loader from '../../components/Loader'
import {
  useSearchParams
} from 'react-router-dom'
import Filter from '../../components/Filter'

const navData = [{
    id: 1,
    name: "ГЛАВНАЯ",
    to: "/"
  },
  {
    id: 2,
    name: "продукты",
    to: "/products"
  },
]


function ProductsPage() {
  let [searchParams, setSearchParams] = useSearchParams();

  // const query = new URLSearchParams(searchParams).toString();
  const paramsObject = Object.fromEntries(searchParams.entries());

  let queryObject = Object.keys(paramsObject)
    .filter((k) => paramsObject[k] != "")
    .reduce((a, k) => ({
      ...a,
      [k]: paramsObject[k]
    }), {});

  let query = Object.keys(queryObject).map(b => `${b}=${queryObject[b]}`).join('&');

  function getQuery(params) {
    switch (params) {
      case "country=":
        return api.get(`product`)
      case "car=":
        return api.get(`product`)
      case "category=":
        return api.get(`product`)
      default:
        return api.get(`product?${params}`)
    }
  }

  let {isLoading,data,error} = useQuery(["products", query], () => getQuery(query));

  return (
    <div>
      <Showcase data={showcaseData} />
      <NavigationStatus data={navData} />
      <div className='container'>
        <Title children={`каталог от ${price.minValue} до ${price.maxValue}`} textAlign='left' margin='89px 0px 49px 0px' />
        <div className={styles.product__container}>
            <Filter queryObject={queryObject} onClick={setSearchParams} dropdata={dropData[1].data} />
          {isLoading ? <Loader /> : <ProductsMain data={error?{status:error.message}:data} />}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage