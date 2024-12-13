import React from "react";
import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "../theme/header";
import { ROUTERS } from "utils/router";

import featuredImg1 from "../../../assets/user/images/featured/featured1.jpg";
import featuredImg2 from "../../../assets/user/images/featured/featured2.jpg";
import featuredImg3 from "../../../assets/user/images/featured/featured3.jpg";
import featuredImg4 from "../../../assets/user/images/featured/featured4.jpg";
import featuredImg5 from "../../../assets/user/images/featured/featured5.jpg";
import featuredImg6 from "../../../assets/user/images/featured/featured6.jpg";
import featuredImg7 from "../../../assets/user/images/featured/featured7.jpg";
import featuredImg8 from "../../../assets/user/images/featured/featured8.jpg";
import featuredImg9 from "../../../assets/user/images/featured/featured9.jpg";
import { ProductCard } from "component";

const ProductsPage = () => {

    const sorts = [
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];

    const products = [
        {
            img: featuredImg1,
            name: "Chuối",
            price: 20000,
        },
        {
            img: featuredImg3,
            name: "Táo",
            price: 30000,
        },
        {
            img: featuredImg5,
            name: "Thịt bò nạc",
            price: 200000,
        },
        {
            img: featuredImg4,
            name: "Nho",
            price: 350000,
        },
        {
            img: featuredImg7,
            name: "Xoài",
            price: 100000,
        },
        {
            img: featuredImg9,
            name: "Dưa hấu",
            price: 100000,
        },
        {
            img: featuredImg2,
            name: "Hamberger",
            price: 35000,
        },
        {
            img: featuredImg6,
            name: "Khoai tây chiên",
            price: 35000,
        },
        {
            img: featuredImg8,
            name: "Xúc xích",
            price: 15000,
        }
    ];

    return (
        <>
            <Breadcrumb name="Danh sách sản phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-xs-12 ">
                        <div className="sidebar">
                            <div className="sidebar_item">
                                <h2>Tìm kiếm</h2>
                                <input type="text"></input>
                            </div>
                            <div className="sidebar_item">
                                <h2>Mức giá</h2>
                                <div className="price-range-wrap">
                                    <div>
                                        <p>Từ:</p>
                                        <input type="number" min={0}></input>
                                    </div>
                                    <div>
                                        <p>Đến:</p>
                                        <input type="number" min={0}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar_item">
                                <h2>Sắp xếp</h2>
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
                            {/* Lấy tạm bên header */}
                            <div className="sidebar_item">
                                <h2>Thể loại khác</h2>
                                <ul>
                                    {categories.map((category, key) => (
                                        <li key={key}>
                                            <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-xs-12 ">
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
}
export default memo(ProductsPage);