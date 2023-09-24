import React from "react";

import Directory from "../../components/section/Directory";
function CategoryPage() {
  return (
    <div className="">
      <Directory
        subtitle="Мы предлагаем лучшие цены на продукцию!"
        title="КАТАЛОГ"
        data={data}
      />
    </div>
  );
}

export default CategoryPage;

const data = [
  {
    id: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/10db/3582/84d8a0182a6c466f3b18f9c47e4f69cb?Expires=1696204800&Signature=TvSxe7IxDEBp0t6yWhL3hGVSmMnQoZZQC30uccfkcns5KxrNOz9b5iCADoUQ--sqOOB7Mp5UGQTRIhXHU8CvGkdXkJxbHI4r-iw3Okl-s0aqz61Lhkob9KDiYtTZnXG7KGa64qts34jbgT5PXKD7-n3HdA-5cKXr9IH1hydeI8urT2xsThu3~zDI7xeFjmXeWUhM0-cN-Ap4oW6WIMGzcR8dAN~PSAo-qLtf2zT8eNOXK6ZtABMaTjZk6nNhBnIrN9gWwlZm1o73hJhdkQzvkfeNg1HOx01xUyEoBTook9S-BdWZ3lnhetnBVbbdAeQFO16f9DwvspCza0SweBUEKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 2,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/2b2b/dc4c/ee18fb55320ce3faf445feec14728c7c?Expires=1696204800&Signature=MXs-8y4tsgexVlMoX2BLbeK0g5vkCOyXBl4Vj1s~gz4KbgGh6PqxsGaJ8x3Ow5HfKeSy8HrSXlTSriN77VLLOLpvX9vuW4t1Jxk-ID1awA-sFUltIDmzlNcKXi-TTuiXDtjUPr6gZUQ9n1xwwDIBjXis4BaETlkEEP3uJRnWl3YrwwURLWPT050LARM8PuVyRunH~O-vIZJHdUtGOYx1JZ76jIg5w4bx3X~VFkCzG43Pu1R2KbMifhsLe~jko3MNwtIIw4YFl-6wAREjoSBNKkdc2geKVQ0gRMIY0WLdZytvWyguwJ386sHDlz67qknQuq9yZkyJqj6IIigBwYaaAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 3,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/1457/07c1/f399709b58b61d6d784f7034352fe12d?Expires=1696204800&Signature=ozK~8OwRLUx-jT5UMt~Aq1MbuyiqdfhtKcvpzJEaAzT215zG-3fqOklT51fOEU3lzvpn4Leexea4835YEfUdvUXX9L07XufSNeg8W9TSOllCZS4gVuJI2s4-e3LrbHKgdCmkrUKvfhklsl5ChGtUNYiKpi-V~Tf4a2QsThlz5fCfYQlD1RmpW~fxIzEExh0q98d65EAh1DrftA2PhduRygdfNirYRaNrAhIkRD4JP1bm~Nt~JwuciTgWIMdTdpa4Ks~6H0q04cixRYfR3IrNa5RXcV~TlGdLvIn~iTbdHNvRE6SqB9VvmamDEOqOvmx0JA0y-bZkrScWbH3X8wx7BA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 4,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/4f91/3de9/fc2a28a27255c2d3388ab2dd04361b46?Expires=1696204800&Signature=lP2LL1CkAVriXeIG2YlFqVkzXshYuTWpjhjHvAvRJqdaoCQ1NRUyYTd92BsPbWoWCfQzOgjdOwCfsQKPdnpJZ522zGz-cyLgrvQSpvSyqI41DMHQ51xg9EdOQ8snteT7BQ~of1JTyM7PFBnmUBCiZ~N6iEM7NII9IO4DHjWd4XMXRGL1N5mEDSteVBnTbr5Durc8TuKScwdcBAPyWeF0d5Y7IXuIX-CKMifxF~CuAmQH1TnxvXM8EhTOvNpyDtxCrpElGd0POA9N0XLXq-4dn8ZK5KdYiRWEofeBiqYlmvAnRU4Xpw4pbqXDpyqSnjf0gBprtzn~qr~zNazgPojcjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 5,
    imgUrl:
      "https://www.figma.com/file/kjNyIlLZ3zjSqCWD6wliCs/image/752cea0988ec103165471fa3796a2d8cf1097e59",
    title: "АККУМУЛЯТОРЫ",
  },
  {
    id: 6,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/10db/3582/84d8a0182a6c466f3b18f9c47e4f69cb?Expires=1696204800&Signature=TvSxe7IxDEBp0t6yWhL3hGVSmMnQoZZQC30uccfkcns5KxrNOz9b5iCADoUQ--sqOOB7Mp5UGQTRIhXHU8CvGkdXkJxbHI4r-iw3Okl-s0aqz61Lhkob9KDiYtTZnXG7KGa64qts34jbgT5PXKD7-n3HdA-5cKXr9IH1hydeI8urT2xsThu3~zDI7xeFjmXeWUhM0-cN-Ap4oW6WIMGzcR8dAN~PSAo-qLtf2zT8eNOXK6ZtABMaTjZk6nNhBnIrN9gWwlZm1o73hJhdkQzvkfeNg1HOx01xUyEoBTook9S-BdWZ3lnhetnBVbbdAeQFO16f9DwvspCza0SweBUEKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "АККУМУЛЯТОРЫ",
  },
];
