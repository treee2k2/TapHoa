const Order = require('../models/CRUD/orderModel');

// Lấy danh sách đơn hàng
exports.getOrders = (req, res) => {
    const query = 'SELECT * FROM orders'; // Truy vấn SQL để lấy danh sách đơn hàng
    Order.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy danh sách đơn hàng: ' + err.message);
        }
        res.status(200).json(results); // Trả về danh sách đơn hàng
    });
};

// Thêm đơn hàng mới
exports.addOrder = (req, res) => {
    const { user_id, order_date, total_amount, status } = req.body; // Lấy dữ liệu từ yêu cầu

    Order.addOrder(user_id, order_date, total_amount, status, (err, orderId) => {
        if (err) {
            return res.status(500).send('Lỗi khi thêm đơn hàng: ' + err.message);
        }
        res.status(201).send('Đơn hàng đã được thêm với ID: ' + orderId);
    });
};

// Sửa thông tin đơn hàng
exports.updateOrder = (req, res) => {
    const { order_id, total_amount, status } = req.body; // Lấy dữ liệu từ yêu cầu

    // Kiểm tra xem order_id có tồn tại không
    if (!order_id) {
        return res.status(400).send('order_id là bắt buộc để xác định đơn hàng cần sửa.');
    }

    Order.updateOrder(order_id, total_amount, status, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi cập nhật đơn hàng: ' + err.message);
        }
        res.status(200).send('Đơn hàng đã được cập nhật');
    });
};

// Xóa đơn hàng
exports.deleteOrder = (req, res) => {
    const { order_id } = req.body; // Lấy order_id từ yêu cầu

    Order.deleteOrder(order_id, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi xóa đơn hàng: ' + err.message);
        }
        res.status(200).send('Đơn hàng đã được xóa');
    });
};
