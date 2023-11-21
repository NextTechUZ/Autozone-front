export const newsData = [{
    id: 1,
    img: require("../img/news1.jpg"),
    date: "2 февраля 2020 года",
    text: "У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!",
    link: "/"
  },
  {
    id: 2,
    img:require("../img/news2.jpg"),
    date: "10 февраля 2020 года",
    text: "ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA ",
    link: "/"
  },
  {
    id: 3,
    img: require("../img/news3.jpg"),
    date: "5 февраля 2020 года",
    text: "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE ",
    link: "/"
  }
]
export const showcaseData = [
  {
  id: 1,
  bgImg: require("../img/showcaseBg1.png"),
  title: "КОМАНДА ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ",
  buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  subtitle: "Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес.",
},
{
  id: 2,
  bgImg: require("../img/showcaseBg2.png"),
  title: "ЗАБОТЛИВЫЙ СЕРВИС И СВОЕВРЕВЕННАЯ ИНФОРМАЦИЯ",
  buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
},
{
  id: 3,
  bgImg: require("../img/showcaseBg3.png"),
  title: "БУДЬТЕ НА СВЯЗИ С КОМАНДОЙ PRO AUTO",
  buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
},
];
export let dropData = [
  {
    id: 1,
    title: "КОМПАНИЯ",
    focus: false,
    to: "/about",
    data: [
      {
        id: 1,
        text: "продукты",
        to: '/products'
      },
      {
        id: 2,
        text: "О КОМПАНИИ",
        to: '/about'
      },
      {
        id: 3,
        text: "ЛИЦЕНЗИИ",
        to: '/'
      },
      {
        id: 4,
        text: "ПАРТНЕРЫ",
        to: '/about#partners'
      },
      {
        id: 5,
        text: "ОТЗЫВЫ КЛИЕНТОВ",
        to: '/'
      },
      {
        id: 6,
        text: "РЕКВИЗИТЫ",
        to: '/'
      },
      {
        id: 7,
        text: "ВАКАНСИИ",
        to: '/'
      },
    ]
  },
  {
    id: 2,
    title: "КАТАЛОГ",
    focus: false,
    to: '/category',
    data: [
      {
        id: 1,
        text: "страна",
        to: "/",
        focus: false,
        drop:[
          {
            id:1,
            name:"узбекистан"
          },
          {
            id:2,
            name:"Турция"
          },
          {
            id:3,
            name:"Россия"
          },
          {
            id:4,
            name:"Казахстан"
          },
        ]
      },
      {
        id: 2,
        text: "машина",
        to: '/',
        focus: false,
        drop:[
          {
            id:1,
            name:"Cobalt"
          },
          {
            id:2,
            name:"Lacetti"
          },
          {
            id:3,
            name:"Spark"
          },
          {
            id:4,
            name:"Chevrolet Monza"
          },
        ]
      },
      {
        id: 3,
        text: "категория",
        to: '/',
        focus: false,
        drop:[
          {
            id:1,
            name:"АККУМУЛЯТОРЫ"
          },
          {
            id:2,
            name:"АВТОМАСЛА"
          },
          {
            id:3,
            name:"АКСЕССУАРЫ"
          },
          {
            id:4,
            name:"АВТОХИМИЯ"
          },
        ]
      },
    ]
  },
  {
    id: 3,
    title: "УСЛУГИ",
    focus: false,
    to: "/service",
    // data: [{
    //     id: 1,
    //     text: "ДИАГНОСТИКА АККУМУЛЯТОРА",
    //     to: '/'
    //   },
    //   {
    //     id: 2,
    //     text: "ПРИЕМ АККУМУЛЯТОРОВ",
    //     to: '/'
    //   }
    // ]
  },
  {
    id: 4,
    title: "ИНФОРМАЦИЯ",
    focus: false,
    to: "/info",
    data: [{
        id: 1,
        text: "НОВОСТИ",
        to: '/'
      },
      {
        id: 2,
        text: "F.A.Q",
        to: '/ask-question'
      }
    ]
  },
  {
    id: 5,
    title: "КОНТАКТЫ",
    focus: false,
    to: "/contacts",
  }
]

export let searchControl = false
export function handleSearchOpen() {
  searchControl = true
}
export function handleSearchClose() {
  searchControl = false
}
export const products = [{
    id: 1,
    name: 'Гелиевые Аккумуляторы OPTIMA',
    to: "/"
  },
  {
    id: 2,
    name: 'Оригинальные Аккумуляторы',
    to: "/"
  },
  {
    id: 3,
    name: 'АКБ MAGNUM',
    to: "/"
  },
  {
    id: 4,
    name: "АКБ EDCON",
    to: '/'
  },
  {
    id: 5,
    name: "АКБ AFA",
    to: '/'
  },
  {
    id: 6,
    name: "АКБ BOSCH",
    to: '/'
  },
  {
    id: 7,
    name: "АКБ MUTLU",
    to: '/'
  },
  {
    id: 8,
    name: "ОРИГИНАЛЬНЫЕ АКБ",
    to: '/'
  },
  {
    id: 9,
    name: "ГЕЛИЕВЫЕ АКБ OPTIMA",
    to: '/'
  }
]