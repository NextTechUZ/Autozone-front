import React, {useEffect, useState} from 'react'
import styles from "./style.module.scss"
import Title from '../../components/Title'
import Showcase from '../../components/section/Showcase'
import {dropData,showcaseData} from '../../store/store'
import NavigationStatus from '../../components/section/NavigationStatus'
import ProductsMain from '../../components/section/ProductsMain'
import {getData} from '../../services/useApi'
import {PRODUCT} from '../../store/axios'
import { useQuery} from 'react-query'
import Loader from '../../components/Loader'

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

  const [field, setField] = useState("all");
  const [focus, setFocus] = useState(false);

  async function setData(product) {
    switch (product) {

      case "car":
        const carCase = await getData(PRODUCT.car);
        return [
          ...carCase.data.cars
        ]

      case "country":
        const countryCase = await getData(PRODUCT.country);
        return [
          ...countryCase.data.countries
        ]

      case "category":
        const categoryCase = await getData(PRODUCT.category);
        return [
          ...categoryCase.data.categories
        ]

      case "all":
        const cars = await getData(PRODUCT.car);
        const category = await getData(PRODUCT.category);
        const country = await getData(PRODUCT.country);

        return [
          ...country.data.countries,
          ...cars.data.cars,
          ...category.data.categories
        ]
      default:
        const params = `${product.split("/")[0]}`
        const oneProduct = (await getData(PRODUCT.one_product(product))).data[params];
        return [
          oneProduct
        ]
    }

  }
  let {isLoading, data } = useQuery(field, () => setData(field));

  function handleActive(id) {
    dropData[1].data.forEach((el) => {
      if (el.id == id) {
        el.active = !el.active;
        setFocus(!focus)
      } else
        el.active = false
    })
  }

  async function handleItemActive(params, id, value) {
    dropData[1].data.forEach((element) => {
      if (element.id == params) {
        element.drop.forEach(el => {
          if (el._id === id) {
            el.active = true
          }
          else el.active = false
        })
      }
    })
    setField(`${value}/${id}`)
  }

  useEffect(() => {
    dropData[1].data.forEach(element => {
      if (element.active) {
        setField(element.value);
        element.drop.forEach(params=>{
          if (params.active) {;
            setField(`${params.value}/${params._id}`)
          }
        })
      }
    })
  }, [dropData[1].data]);

  function handleMenuClick(data, active) {
    setField(data)
    handleActive(active)
  }

    return (
      <div>
        <Showcase data={showcaseData}/> 
        <NavigationStatus data={navData}/>
         <div className='container'>
          <Title children="MAGNUM - каталог АКБ от 60 до 230Ah" textAlign='left' margin='89px 0px 49px 0px'/>
          <div className={styles.product__container}>
          <section className={styles.filter}>
            <ul className={styles["filter__category-list"]}>
              {dropData[1].data.map(el=>
              <li key={el.id}  className={styles["filter__category-item"]}>
                <button onClick={()=>handleMenuClick(el.value,el.id)}  className={el.active?styles["filter__category-button--active"]:styles["filter__category-button"]}>{el.text}</button>
                <ul style={el.active?{display:'block'}:{display:"none"}} className={styles["category__drop-list"]}>
                  {el.drop.map(elem=>
                  <li key={elem._id} onClick={()=>handleItemActive(el.id,elem._id,el.value)} className={elem.active?styles["category__drop-item--active"]:styles["category__drop-item"]}>
                    {elem.title}
                  </li>
                  )}
                </ul>
              </li>)}
            </ul>
          </section>
           {isLoading?<Loader/>:<ProductsMain data={data} />}
           
         </div>
          </div>

      </div>
    )
}

export default ProductsPage