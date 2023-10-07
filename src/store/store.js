import img from "../img/news1.jpg";
export const newsData = [
  {
    id: 1,
    img: img,
    text: "У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!",
    link: "/",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/10db/3582/84d8a0182a6c466f3b18f9c47e4f69cb?Expires=1696204800&Signature=TvSxe7IxDEBp0t6yWhL3hGVSmMnQoZZQC30uccfkcns5KxrNOz9b5iCADoUQ--sqOOB7Mp5UGQTRIhXHU8CvGkdXkJxbHI4r-iw3Okl-s0aqz61Lhkob9KDiYtTZnXG7KGa64qts34jbgT5PXKD7-n3HdA-5cKXr9IH1hydeI8urT2xsThu3~zDI7xeFjmXeWUhM0-cN-Ap4oW6WIMGzcR8dAN~PSAo-qLtf2zT8eNOXK6ZtABMaTjZk6nNhBnIrN9gWwlZm1o73hJhdkQzvkfeNg1HOx01xUyEoBTook9S-BdWZ3lnhetnBVbbdAeQFO16f9DwvspCza0SweBUEKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "10 февраля 2020 года",
    text: "ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA ",
    link: "/",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/10db/3582/84d8a0182a6c466f3b18f9c47e4f69cb?Expires=1696204800&Signature=TvSxe7IxDEBp0t6yWhL3hGVSmMnQoZZQC30uccfkcns5KxrNOz9b5iCADoUQ--sqOOB7Mp5UGQTRIhXHU8CvGkdXkJxbHI4r-iw3Okl-s0aqz61Lhkob9KDiYtTZnXG7KGa64qts34jbgT5PXKD7-n3HdA-5cKXr9IH1hydeI8urT2xsThu3~zDI7xeFjmXeWUhM0-cN-Ap4oW6WIMGzcR8dAN~PSAo-qLtf2zT8eNOXK6ZtABMaTjZk6nNhBnIrN9gWwlZm1o73hJhdkQzvkfeNg1HOx01xUyEoBTook9S-BdWZ3lnhetnBVbbdAeQFO16f9DwvspCza0SweBUEKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "5 февраля 2020 года",
    text: "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE ",
    link: "/",
  },
];
export let dropData = [
  {
    id: 1,
    title: "КОМПАНИЯ",
    focus: false,
    data: [
      {
        id: 1,
        text: "О КОМПАНИИ",
        to: "/",
      },
      {
        id: 2,
        text: "ЛИЦЕНЗИИ",
        to: "/",
      },
      {
        id: 3,
        text: "ПАРТНЕРЫ",
        to: "/",
      },
      {
        id: 4,
        text: "ОТЗЫВЫ КЛИЕНТОВ",
        to: "/",
      },
      {
        id: 5,
        text: "РЕКВИЗИТЫ",
        to: "/",
      },
      {
        id: 6,
        text: "ВАКАНСИИ",
        to: "/",
      },
    ],
  },
  {
    id: 2,
    title: "КАТАЛОГ",
    focus: false,
    data: [
      {
        id: 1,
        text: "АККУМУЛЯТОРЫ",
        drop: [
          {
            id: 1,
            text: "АКБ MAGNUM",
            to: "/",
          },
          {
            id: 2,
            text: "ТЮМЕНСКИЙ АККУМУЛЯТОРНЫЙ ЗАВОД",
            to: "/",
          },
          {
            id: 3,
            text: "АКБ AKOM",
            to: "/",
          },
          {
            id: 4,
            text: "АКБ BARS",
            to: "/",
          },
          {
            id: 5,
            text: "АКБ ТЮМЕНСКИЙ МЕДВЕДЬ",
            to: "/",
          },
          {
            id: 6,
            text: "АКБ ENRUN",
            to: "/",
          },
          {
            id: 7,
            text: "АКБ UNIX (WESTA)",
            to: "/",
          },
          {
            id: 8,
            text: "АКБ EDCON",
            to: "/",
          },
          {
            id: 9,
            text: "АКБ AFA",
            to: "/",
          },
          {
            id: 10,
            text: "АКБ BOSCH",
            to: "/",
          },
          {
            id: 11,
            text: "АКБ MUTLU",
            to: "/",
          },
          {
            id: 12,
            text: "ОРИГИНАЛЬНЫЕ АКБ",
            to: "/",
          },
          {
            id: 13,
            text: "ГЕЛИЕВЫЕ АКБ OPTIMA",
            to: "/",
          },
        ],
      },
      {
        id: 2,
        text: "АВТОМАСЛА",
        to: "/",
      },
      {
        id: 3,
        text: "АКСЕССУАРЫ",
        to: "/",
      },
      {
        id: 4,
        text: "АВТОХИМИЯ",
        to: "/",
      },
    ],
  },
  {
    id: 3,
    title: "УСЛУГИ",
    focus: false,
    data: [
      {
        id: 1,
        text: "ДИАГНОСТИКА АККУМУЛЯТОРА",
        to: "/",
      },
      {
        id: 2,
        text: "ПРИЕМ АККУМУЛЯТОРОВ",
        to: "/",
      },
    ],
  },
  {
    id: 4,
    title: "ИНФОРМАЦИЯ",
    focus: false,
    data: [
      {
        id: 1,
        text: "НОВОСТИ",
        to: "/",
      },
      {
        id: 2,
        text: "F.A.Q",
        to: "/",
      },
    ],
  },
];

export let searchControl = false;
export function handleSearchOpen() {
  searchControl = true;
}
export function handleSearchClose() {
  searchControl = false;
}
export const products = [
  {
    id: 1,
    name: "Гелиевые Аккумуляторы OPTIMA",
    to: "/",
  },
  {
    id: 2,
    name: "Оригинальные Аккумуляторы",
    to: "/",
  },
  {
    id: 3,
    name: "АКБ MAGNUM",
    to: "/",
  },
  {
    id: 4,
    name: "АКБ EDCON",
    to: "/",
  },
  {
    id: 5,
    name: "АКБ AFA",
    to: "/",
  },
  {
    id: 6,
    name: "АКБ BOSCH",
    to: "/",
  },
  {
    id: 7,
    name: "АКБ MUTLU",
    to: "/",
  },
  {
    id: 8,
    name: "ОРИГИНАЛЬНЫЕ АКБ",
    to: "/",
  },
  {
    id: 9,
    name: "ГЕЛИЕВЫЕ АКБ OPTIMA",
    to: "/",
  },
];
