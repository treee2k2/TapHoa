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

import { ProductCard } from "component";
import { featproducts } from "utils/common";
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




    const renderFeatproducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            //console.log(key, index);
            tabList.push(<Tab key={index}>{data[key].title}</Tab>)

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                        <ProductCard name={item.name} img={item.img} price={item.price} />
                    </div>
                );
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