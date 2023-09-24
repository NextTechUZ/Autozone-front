import React from "react";
import Slider from "react-slick";
import cx from "classnames";

const headerData = [
  {
    classname: "first",
    secondClass: "first-info",
    title: "НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ",
    subtitle:
      "The trucking industry is an important part of The U.S. economy, representing one of the largest sources of income, and moving 11 billion tons of freight -- nearly 70% of all freight -- across the country. In the private sector, trucking companies such as White-Swan collectively employ about 8.9 million people in trucking-related jobs, including almost 3.5 million truck drivers. Overall the industry contributes about 5% of gross domestic product each year. ",
    path: "first",
  },
  {
    classname: "second",
    secondClass: "second-info",
    title: "White Swan",
    subtitle:
      "White-Swan is a privately held, trucking and logistics company, with an active fleet 25 trucks. The company facilitates freight transportation services for various businesses, operating throughout all 48 US mainland states.",
    path: "second",
  },
  {
    classname: "third",
    title: "A Green Future",
    secondClass: "third-info",
    subtitle:
      "Green Shipping are practices, processes, or technologies that are employed to reduce emissions, consume less energy, and be more efficient. The impetus to move toward a Green Future is not limited to the US. According to OECD's 2021 International Transport Forum, demand for passenger and freight transportation is expected to increase rapidly over the next few decades. Growing economies in Asia, Africa, and Latin America are expected to triple the global demand for freight by 2050, doubling the amount of greenhouse gas emissions from trucking. Transportation accounts for 8% of the global greenhouse gas emissions, or as much as 11% when including storage facilities and ports. Therefore it is incumbent upon all transportation and logistics companies to embrace every aspect of environmental efficiency.",
    path: "third",
  },
];
function Showcase() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    centerMode: true,
    useCSS: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="carusel">
      <Slider {...settings}>
        <div>
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/1457/07c1/f399709b58b61d6d784f7034352fe12d?Expires=1696204800&Signature=ozK~8OwRLUx-jT5UMt~Aq1MbuyiqdfhtKcvpzJEaAzT215zG-3fqOklT51fOEU3lzvpn4Leexea4835YEfUdvUXX9L07XufSNeg8W9TSOllCZS4gVuJI2s4-e3LrbHKgdCmkrUKvfhklsl5ChGtUNYiKpi-V~Tf4a2QsThlz5fCfYQlD1RmpW~fxIzEExh0q98d65EAh1DrftA2PhduRygdfNirYRaNrAhIkRD4JP1bm~Nt~JwuciTgWIMdTdpa4Ks~6H0q04cixRYfR3IrNa5RXcV~TlGdLvIn~iTbdHNvRE6SqB9VvmamDEOqOvmx0JA0y-bZkrScWbH3X8wx7BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            alt=""
          />
        </div>
        <div>
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/74c6/8a94/0a39e15d94ae2dee252d44ec7b590284?Expires=1696204800&Signature=j~HKxyQ6bW~P0cXaveB2abA~Ix99ZbIozjcNRw2PUs2maCiDUCO2~dYuohf4FqHDJJ-Zi1XVhNyEAJn-95-v8EgvywGTalE3DhG6TX~d4k~H3vHhPBN6KG~T1ISZIlKCPFe2vgP3BR9LRMennBKH1X0RoUPcfaHQar0qTcJbHj9onxkcOXUFo123KUfhCLxYI~Yc6EhZY4YN31jC5nQ7AQJB-C4KMMEMrOPIhBOAewtvqyp6zcx2lLbPw379BI8ixbX7Ft1nzsN4hU3BGVuqD~d6AGBgL7lTMJwNxk1XaR~8HJt8gaWTJ3kJTXyiWAhGdB8LUWusSZFPiAkQp28CPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Showcase;
