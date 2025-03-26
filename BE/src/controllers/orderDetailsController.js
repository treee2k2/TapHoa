const OrderDetail = require('../models/CRUD/orderDetailsModel');

// Lấy danh sách chi tiết đơn hàng
exports.getOrderDetails = (req, res) => {
    const query = 'SELECT * FROM order_details'; // Truy vấn SQL để lấy danh sách chi tiết đơn hàng
    OrderDetail.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy danh sách chi tiết đơn hàng: ' + err.message);
        }
        res.status(200).json(results); // Trả về danh sách chi tiết đơn hàng
    });
};

// Thêm chi tiết đơn hàng mới
exports.addOrderDetail = (req, res) => {
    const { order_id, product_id, so_luong, price, cost } = req.body; // Lấy dữ liệu từ yêu cầu

    OrderDetail.addOrderDetail(order_id, product_id, so_luong, price, cost, (err, orderDetailId) => {
        if (err) {
            return res.status(500).send('Lỗi khi thêm chi tiết đơn hàng: ' + err.message);
        }
        res.status(201).send('Chi tiết đơn hàng đã được thêm với ID: ' + orderDetailId);
    });
};

// Sửa thông tin chi tiết đơn hàng
exports.updateOrderDetail = (req, res) => {
    const { order_detail_id, so_luong, price, cost } = req.body; // Lấy dữ liệu từ yêu cầu

    OrderDetail.updateOrderDetail(order_detail_id, so_luong, price, cost, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi cập nhật chi tiết đơn hàng: ' + err.message);
        }
        res.status(200).send('Chi tiết đơn hàng đã được cập nhật');
    });
};

// Xóa chi tiết đơn hàng
exports.deleteOrderDetail = (req, res) => {
    const { order_detail_id } = req.body; // Lấy order_detail_id từ yêu cầu

    OrderDetail.deleteOrderDetail(order_detail_id, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi xóa chi tiết đơn hàng: ' + err.message);
        }
        res.status(200).send('Chi tiết đơn hàng đã được xóa');
    });
};
