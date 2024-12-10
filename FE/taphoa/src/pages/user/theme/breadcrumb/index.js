import React from "react";
import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";

// import { FaInstagram } from "react-icons/fa";
// import { RxDiscordLogo } from "react-icons/rx";
// import {
//     CiFacebook,
//     CiTwitter
// } from "react-icons/ci";
const BreadCrumb = (props) => {
    return (
        <div className="breadcrumd">
            <div className="breadcrumd_text">
                <h2>GREEN FOOT</h2>
                <div className="breadcrumd_option">
                    <ul>
                        <li className="link">
                            <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
                        </li>
                        <li>{props.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default memo(BreadCrumb);