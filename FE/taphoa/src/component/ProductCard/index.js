import React from "react";
import { memo } from "react";
import "./style.scss";
import { LuEye } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";

const ProductCard = ({ img, name, price }) => {
    return (
        <>
            <div className="featured_item pl-pr-10">
                <div className="featured_item_pic"
                    style={{
                        backgroundImage: `url(${img})`
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
                        <Link to={""}>{name}</Link>
                    </h6>
                    <h5>
                        {formatter(price)}
                    </h5>
                </div>
            </div>
        </>

    );
};

export default memo(ProductCard);