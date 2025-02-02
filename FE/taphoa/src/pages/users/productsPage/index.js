import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "../theme/header";
import { ROUTERS } from "utils/router";
import feature1Img from "assets/users/images/featured/feature-1.jpg";
import feature2Img from "assets/users/images/featured/feature-2.jpg";
import feature3Img from "assets/users/images/featured/feature-3.jpg";
import feature4Img from "assets/users/images/featured/feature-4.jpg";
import feature5Img from "assets/users/images/featured/feature-5.jpg";
import feature6Img from "assets/users/images/featured/feature-6.jpg";
import feature7Img from "assets/users/images/featured/feature-7.jpg";
import feature8Img from "assets/users/images/featured/feature-8.jpg";
import { ProductCard } from "component";

const ProductsPage = () => {
  const sorts = [
    "Giá thấp đến cao",
    "Giá cao đến thấp",
    "Mới đến cũ",
    "Cũ đến mới",
    "Bán chạy nhất",
    "Đang giảm giá",
  ];

  const products = [
    {
      img: feature1Img,
      name: "Thịt bò nạt",
      price: "20000",
    },
    {
      img: feature2Img,
      name: "Chuối",
      price: "17500",
    },
    {
      img: feature3Img,
      name: "Ổi",
      price: "25000",
    },
    {
      img: feature4Img,
      name: "Dưa hấu",
      price: "44500",
    },
    {
      img: feature5Img,
      name: "Nho tím",
      price: "120000",
    },
    {
      img: feature6Img,
      name: "Hamburger",
      price: "90000",
    },
    {
      img: feature7Img,
      name: "Táo Úc",
      price: "123000",
    },
    {
      img: feature8Img,
      name: "Nho tím",
      price: "12000",
    },
  ];

  return (
    <>
      <Breadcrumb name="Danh sách sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="sidebar__item">
                <h2>Tìm kiếm</h2>
                <input type="text" />
              </div>
              <div className="sidebar__item">
                <h2>Mức giá</h2>
                <div className="price-range-wrap">
                  <div>
                    <p>Từ:</p>
                    <input type="number" min={0} />
                  </div>
                  <div>
                    <p>Đến:</p>
                    <input type="number" min={0} />
                  </div>
                </div>
              </div>
              <div className="sidebar__item">
                <h2>Sắp xếp</h2>
                <div className="tags">
                  {sorts.map((item, key) => (
                    <div
                      className={`tag ${key === 0 ? "active" : ""}`}
                      key={key}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar__item">
                <h2>Thể loại khác</h2>
                <ul>
                  {categories.map((name, key) => (
                    <li key={key}>
                      <Link to={ROUTERS.USER.PRODUCTS}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              {products.map((item, key) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={key}>
                  <ProductCard
                    name={item.name}
                    img={item.img}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductsPage);
