const connection = require('../../config/database'); // Sử dụng kết nối từ database.js

// Hàm để thêm chi tiết đơn hàng
const addOrderDetail = (order_id, product_id, so_luong, price, cost, callback) => {
    const query = 'INSERT INTO order_details (order_id, product_id, so_luong, price, cost) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [order_id, product_id, so_luong, price, cost], (err, results) => {
        if (err) {
            console.error('Lỗi khi thêm chi tiết đơn hàng: ' + err.message);
            return callback(err);
        }
        callback(null, results.insertId);
    });
};

// Hàm để sửa thông tin chi tiết đơn hàng
const updateOrderDetail = (order_detail_id, so_luong, price, cost, callback) => {
    const query = 'UPDATE order_details SET so_luong = ?, price = ?, cost = ? WHERE order_detail_id = ?';
    connection.query(query, [so_luong, price, cost, order_detail_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi cập nhật chi tiết đơn hàng: ' + err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Hàm để xóa chi tiết đơn hàng
const deleteOrderDetail = (order_detail_id, callback) => {
    const query = 'DELETE FROM order_details WHERE order_detail_id = ?';
    connection.query(query, [order_detail_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi xóa chi tiết đơn hàng: ' + err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Xuất các hàm
module.exports = {
    addOrderDetail,
    updateOrderDetail,
    deleteOrderDetail
};
