import img from "../img/news1.jpg"
export const newsData = [{
    id: 1,
    img: img,
    date: "2 февраля 2020 года",
    text: "У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!",
    link: "/"
  },
  {
    id: 2,
    img: img,
    date: "10 февраля 2020 года",
    text: "ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA ",
    link: "/"
  },
  {
    id: 3,
    img: img,
    date: "5 февраля 2020 года",
    text: "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE ",
    link: "/"
  }
]
export let dropData = [{
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
        to: '/'
      },
      {
        id: 3,
        text: "ЛИЦЕНЗИИ",
        to: '/'
      },
      {
        id: 4,
        text: "ПАРТНЕРЫ",
        to: '/'
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
    data: [{
        id: 1,
        text: "АККУМУЛЯТОРЫ",
        to: "/"
      },
      {
        id: 2,
        text: "АВТОМАСЛА",
        to: '/'
      },
      {
        id: 3,
        text: "АКСЕССУАРЫ",
        to: '/'
      },
      {
        id: 4,
        text: "АВТОХИМИЯ",
        to: '/'
      }
    ]
  },
  {
    id: 3,
    title: "УСЛУГИ",
    focus: false,
    to: "/service",
    data: [{
        id: 1,
        text: "ДИАГНОСТИКА АККУМУЛЯТОРА",
        to: '/'
      },
      {
        id: 2,
        text: "ПРИЕМ АККУМУЛЯТОРОВ",
        to: '/'
      }
    ]
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
    to: "/",
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