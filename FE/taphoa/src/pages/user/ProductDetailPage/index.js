import React, { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { LuEye } from "react-icons/lu";
import { FaRegCopy } from "react-icons/fa";
import {
    CiFacebook,
    CiTwitter,
} from "react-icons/ci";

import camImg from "../../../assets/user/images/categories/cam.jpg";
import hoaquakhoImg from "../../../assets/user/images/categories/hoaquakho.jpg";
import raucutuoi1Img from "../../../assets/user/images/categories/raucutuoi1.jpg";
import { formatter } from "utils/fomater";
import { ProductCard } from "component";

import { featproducts } from "utils/common";

const ProductDetailPage = () => {
    const imgs = [camImg, hoaquakhoImg, raucutuoi1Img]
    return (
        <>
            <Breadcrumb name="Chi tiết sản phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 product_detail_pic ">
                        <img src={raucutuoi1Img} alt="product-pic" />
                        <div className="main">
                            {imgs.map((item, key) => (
                                <img src={item} alt="product-pic" key={key} />

                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 product_detail_text ">
                        <h2>Rau củ xanh</h2>
                        <div className="seen-icon">
                            <LuEye />
                            {"10 lượt xem"}
                        </div>
                        <h3>
                            {formatter(200000)}
                        </h3>
                        <p>GREEN FOOT là một trong những hệ thống cửa hàng hoa quả nhập khẩu
                            cung cấp cho quý khách các loại hoa quả nhập khẩu tươi ngon nhất.
                        </p>
                        <ul>
                            <li>
                                <b>Tình trạng:</b> <span>Còn hàng.</span>
                            </li>
                            <li>
                                <b>Số lượng:</b> <span>20</span>
                            </li>
                            <li>
                                <b>Chia sẻ:</b>{" "}
                                <span>
                                    <CiFacebook />
                                    <CiTwitter />
                                    <FaRegCopy />
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="product_detail_tab">
                    <h4>Thông tin chi tiết</h4>
                    <div class="">
                        <ul>
                            <li>Rau củ chứa rất nhiều vitamin và chất dinh dưỡng nên mang đến rất nhiều lợi ích cho sức khỏe con người.</li>
                            <li>Hỗ trợ giảm cân.</li>
                            <li>Giảm nguy cơ mắc các bệnh về tim mạch, béo phì và cả ung thư.</li>
                            <li>Tăng cường sức đề kháng của cơ thể.</li>
                            <li>Cải thiện thị lực.</li>
                            <li>Điều hòa đường huyết.</li>
                            <li>Giảm cholesterol trong máu.</li>
                            <li>Điều hòa huyết áp.</li>
                        </ul>
                        <p>
                            <br />
                            <strong>Cách chọn rau củ tươi ngon:</strong>
                        </p>
                        <ul>
                            <li>
                                Dựa vào hình dáng bên ngoài: Nên ưu tiên chọn các loại rau củ còn phần vỏ không có các vết sâu, cuống lá không bị nhăn, thâm đen. Tránh chọn những
                                loại quả có vỏ ngoài trơn, căng lán, bởi đây có thể là những quả đã bị tiêm thuốc, không an toàn cho sức khỏe.
                            </li>
                            <li>
                                Dựa vào màu sắc: Màu sắc của các loại rau củ thường tươi mới, không có các vết xước, héo hay quá đậm màu. Các loại củ có màu quá xanh hoặc quá bóng
                                sẽ không an toàn cho sức khỏe người dùng.
                            </li>
                            <li>
                                Dựa vào mùi hương: Mùi hương tự nhiên của các loại rau củ sẽ là một đặc trưng nên tăng loại củ không phải là mùi hóa, nóng khó chịu. Nếu các loại củ
                                bạn đang chọn có mùi hóa chất hãy ngừng sử dụng ngay.
                            </li>
                            <li>
                                Dựa vào cảm nhận khi cầm: Những loại củ quả cầm chắc tay, kích thước vừa phải, không quá to sẽ thường ngon hơn những loại to lớn nhưng khối lượng
                                nhẹ. Một số loại rau củ bạn chỉ nên chọn những quả nhỏ, đều tay sẽ ngon hơn.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="section-title">
                    <h2>Sản phẩm tương tự</h2>
                </div>
                <div className="row">
                    {
                        featproducts.all.products.map((item, key) => (
                            <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <ProductCard img={item.img} name={item.name} price={item.price} />
                            </div>
                        ))
                    }


                </div>
            </div>
        </>
    );
}
export default memo(ProductDetailPage);