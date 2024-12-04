import React from "react";
import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import {
    CiFacebook,
    CiTwitter
} from "react-icons/ci";
const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer_about">
                        <h1 className="footer_about_logo">
                            GREEN SHOP
                        </h1>
                        <ul>
                            <li>Địa chỉ: Kim Giang - Hà Nội</li>
                            <li>Phone: 0945-938-033</li>
                            <li>Email: builiem2522002@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer_widget">
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li><Link to="">Liên hệ</Link></li>
                            <li><Link to="">Thông tin về chúng tôi</Link></li>
                            <li><Link to="">Sản phẩm kinh doanh</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="">Thông tin tài khoản</Link></li>
                            <li><Link to="">Giỏ hàng</Link></li>
                            <li><Link to="">Danh sách yêu thích</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div className="footer_widget">
                        <h6>Khuyến mãi và ưu đãi</h6>
                        <p>Đăng ký nhận thông tin</p>
                        <form action="#">
                            <div className="input-group">
                                <input type="text" placeholder="Nhập email" />
                                <button type="submit" className="button-submit">
                                    Đăng ký
                                </button>
                            </div>
                            <div className="footer_wiget_social">
                                <div>
                                    <CiFacebook />
                                </div>
                                <div>
                                    <CiTwitter />
                                </div>
                                <div>
                                    <FaInstagram />
                                </div>
                                <div>
                                    <RxDiscordLogo />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    </footer>;
}
export default memo(Footer);