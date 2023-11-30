import Showcase from '../../components/section/Showcase'
import Info from '../../components/section/Info'
import NavigationStatus from '../../components/section/NavigationStatus'
import Licenses from '../../components/section/Licenses'
import Sponsors from '../../components/section/Sponsors'
import Reviews from '../../components/section/ReviewsSection'
import { showcaseData } from '../../store/store'


const navData = [{
        id: 1,
        name: "ГЛАВНАЯ",
        to: "/"
    },
    {
        id: 2,
        name: "О КОМПАНИИ",
        to: "/about"
    },
]
const licensesData = [{
        id: 1,
        text: "Официальный дистрибьютор материалов марки ELF",
        sertificate: false,
        image: require("../../img/licensesitem.png")
    },
    {
        id: 2,
        text: "Официальный дистрибьютор материалов марки ШЕЛЛ",
        sertificate: true,
        image: require("../../img/sertifikat.jpg")
    },
    {
        id: 3,
        text: "Официальный партнер Castrol",
        sertificate: false,
        image: require("../../img/licensesitem.png")
    },
    {
        id: 4,
        text: "Официальный дистрибьютор материалов марки Mobil",
        sertificate: false,
        image: require("../../img/licensesitem.png")
    },
    {
        id: 5,
        text: "Официальный дистрибьютор материалов марки LIQUI MOLY",
        sertificate: false,
        image: require("../../img/licensesitem.png")
    },
    {
        id: 6,
        text: "Официальный дистрибьютор материалов марки Motul",
        sertificate: false,
        image: require("../../img/licensesitem.png")
    },
]
const spData = [{
        id: 1,
        text: "Компания «ПартКом»",
        img: require("../../img/spn1.jpg"),
    },
    {
        id: 2,
        text: "Компания «АРМТЕК»",
        img: require("../../img/spn2.jpg"),
    },
    {
        id: 3,
        text: "Компания «Бином»",
        img: require("../../img/spn3.jpg"),
    },
    {
        id: 4,
        text: "Компания «Маслон»",
        img: require("../../img/spn4.jpg"),
    },
    {
        id: 5,
        text: "ООО «Аккумуляторный Мир»",
        img: require("../../img/spn5.jpg"),
    },
    {
        id: 6,
        text: "Компания «ЮНИКС» г. Киров",
        img: require("../../img/spn6.jpg"),
    },
    {
        id: 7,
        text: "Компания «Фаворит»",
        img: require("../../img/spn7.jpg"),
    },
]

function About() {
    return (
                <>
                <Showcase data={showcaseData}/>
                <NavigationStatus data={navData}/>
                <Info button={false}  text={"Мы рады приветствовать вас на нашем сайте.Компания «PROавто» - это надежные, качественные аккумуляторы в широком ассортименте, разнообразные в по форме и характеристикам, а также качественные масла и автохимия именитых брендов.Сеть магазинов «PROавто» более 20-и лет занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров. Мы зарекомендовали себя как надежная компания, специалисты которой всегда готовы проконсультировать по любому вопросу: от подбора автощёток, до рекомендаций по подбору аккумулятора для Вашего автомобиля. Мы дорожим своей репутацией и даём гарантию на весь ассортимент продукции, представленной на нашем сайте!Убедитесь в этом сами!"}/>
                <Licenses data={licensesData}/>
                <Sponsors data={spData}/>
                 <Reviews/>
                </>
    )
}

export default About