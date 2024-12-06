import React from "react";
import { memo } from "react";
import "./style.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import camImg from "../../../assets/user/images/categories/cam.jpg";
import hoaquakhoImg from "../../../assets/user/images/categories/hoaquakho.jpg";
import milkImg from "../../../assets/user/images/categories/milk.jpg";
import raucutuoiImg from "../../../assets/user/images/categories/raucutuoi1.jpg";
import meatImg from "../../../assets/user/images/categories/meat.jpg";

import featuredImg1 from "../../../assets/user/images/featured/featured1.jpg";
import featuredImg2 from "../../../assets/user/images/featured/featured2.jpg";
import featuredImg3 from "../../../assets/user/images/featured/featured3.jpg";
import featuredImg4 from "../../../assets/user/images/featured/featured4.jpg";
import featuredImg5 from "../../../assets/user/images/featured/featured5.jpg";
import featuredImg6 from "../../../assets/user/images/featured/featured6.jpg";
import featuredImg7 from "../../../assets/user/images/featured/featured7.jpg";
//import featuredImg8 from "../../../assets/user/images/featured/featured8.jpg";
import featuredImg9 from "../../../assets/user/images/featured/featured9.jpg";

import { LuEye } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const sliderItem = [
        {
            bgImg: camImg,
            name: "Cam tươi",
        },
        {
            bgImg: hoaquakhoImg,
            name: "Hoa quả khô",
        },
        {
            bgImg: raucutuoiImg,
            name: "Rau củ tươi",
        },
        {
            bgImg: milkImg,
            name: "Sữa hộp",
        },
        {
            bgImg: meatImg,
            name: "Thịt bò",
        },
    ];

    const featproducts = {
        all: {
            title: "Toàn bộ",
            products: [
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
                }
            ]
        },
        freshMeat: {
            title: "Thịt Tươi",
            products: [
                {
                    img: featuredImg5,
                    name: "Thịt bò nạc",
                    price: 200000,
                },

            ]
        },
        fruit: {
            title: "Trái cây",
            products: [
                {
                    img: featuredImg1,
                    name: "Chuối",
                    price: 20000,
                },
                {
                    img: featuredImg3,
                    name: "Táo",
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
                }
            ]
        },
        fastFood: {
            title: "Thức ăn nhanh",
            products: [
                // {
                //     img: featuredImg8,
                //     name: "Xúc xích",
                //     price: 10000,
                // },
                {
                    img: featuredImg6,
                    name: "Khoai tây chiên",
                    price: 35000,
                },
                {
                    img: featuredImg2,
                    name: "Hamberger",
                    price: 35000,
                }
            ]
        }
    };


    const renderFeatproducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            //console.log(key, index);
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3" key={j}>
                    <div className="featured_item">
                        <div className="featured_item_pic"
                            style={{
                                backgroundImage: `url(${item.img})`
                            }}
                        >
                            <ul className="featured_item_pic_hover">
                                <li>
                                    <LuEye />
                                </li>
                                <li>
                                    <CiShoppingCart />
                                </li>
                            </ul>
                        </div>
                        <div className="featured_item_text">
                            <h6>
                                <Link to="">{item.name}</Link>
                            </h6>
                            <h5>
                                {formatter(item.price)}
                            </h5>
                        </div>
                    </div>
                </div>);
            });
            tabPanels.push(tabPanel);

        });

        return (
            <Tabs>
                <TabList>{tabList}</TabList>

                {tabPanels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row">{item}</div>

                    </TabPanel>
                ))}


            </Tabs>
        );
    }

    return (
        <>
            {/*Categories begin */}
            <div className="container container_categories_slider">
                <Carousel responsive={responsive} className="categories_slider">
                    {sliderItem.map((item, key) => (
                        <div className="container_categories_item"
                            style={{ backgroundImage: `url(${item.bgImg})` }}
                            key={key}>
                            <p>
                                {item.name}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
            {/*Categories end */}

            {/*Feature begin */}
            <div className="container">
                <div className="feature">
                    <div className="section-title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeatproducts(featproducts)}

                </div>

            </div>
            {/*Feature end */}
            {/*Banner begin */}
            <div className="container">
                <div className="banner">
                    <div className="banner_pic">
                        <img src={featuredImg1} alt="banner"></img>
                    </div>
                    <div className="banner_pic">
                        <img src={featuredImg1} alt="banner"></img>
                    </div>

                </div>

            </div>
            {/*Banner end */}

        </>
    );
}
export default memo(HomePage);