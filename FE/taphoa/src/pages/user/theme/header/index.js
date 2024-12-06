import React, { useState } from "react";
import { memo } from "react";
import "./style.scss";
import {
    CiFacebook,
    CiUser,
    CiMail,
    CiTwitter,
    CiMenuBurger,
    CiPhone
} from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import { formatter } from "../../../../utils/fomater";
import { CiShoppingCart } from "react-icons/ci";
import { ROUTERS } from "../../../../utils/router";
const Header = () => {
    const [isShowCategories, setShowCategories] = useState(true);
    const [menus] = useState([
        {
            name: "Trang chủ ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng ",
            path: ROUTERS.USER.PRODUCT,
        },
        {
            name: "Sản phẩm ",
            path: ROUTERS.USER.PRODUCT,
            isShowSubmenu: false,
            child: [
                {
                    name: "Thịt",
                    path: "",
                },
                {
                    name: "Rau củ",
                    path: "",
                },
                {
                    name: "Thức ăn nhanh",
                    path: "",
                },
            ]
        },
        {
            name: "Bài viết ",
            path: ROUTERS.USER.PRODUCT,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.PRODUCT,
        },

    ])
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    <CiMail />
                                    builiem2522002@gmail.com
                                </li>
                                <li>
                                    Miễn phí ship đơn từ {formatter(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <CiFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <RxDiscordLogo />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <CiTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <CiUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="header_logo">
                        <h1>GREEN FOOT</h1>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu.path}>{menu?.name}</Link>
                                        {
                                            menu.child && (
                                                <ul className="header_menu_dropdown">
                                                    {
                                                        menu.child.map((childItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>
                                                        ))}

                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                                }
                            </ul>
                        </nav>

                    </div>
                    <div className="header_cart">
                        <div className="header_cart_price">
                            <span>{formatter(1230000)}</span>
                        </div>
                        <ul>
                            <li>
                                <Link to="">
                                    <CiShoppingCart /> <span>5</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="row hero_categories_container">
                    <div className="col-lg-3 hero_categories">
                        <div className="hero_categories_all" onClick={() => setShowCategories(!isShowCategories)}>
                            <CiMenuBurger />
                            Danh sách sản phẩm
                        </div>
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li><Link to="">Thịt tươi</Link></li>
                            <li><Link to="">Rau củ</Link></li>
                            <li><Link to="">Trái cây</Link></li>
                            <li><Link to="">Nước trái cây</Link></li>
                            <li><Link to="">Hải sản</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-9 hero_search_container">
                        <div className="hero_search">
                            <div className="hero_search_form">
                                <form>
                                    <input type="text" placeholder="Bạn đang tìm gì?" />
                                    <button type="submit" >Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="hero_search_phone">
                                <div className="hero_search_phone_icon">
                                    <CiPhone />
                                </div>
                                <div className="hero_search_phone_text">
                                    <p>0945.938.033</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero_item">
                            <div className="hero_text">
                                <span>Trái cây tươi</span>
                                <h2>Rau quả<br />
                                    sạch 100%
                                </h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className="primary-btn">Mua ngay</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default memo(Header);