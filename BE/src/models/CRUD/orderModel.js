const connection = require('../../config/database'); // Sử dụng kết nối từ database.js

// Hàm để thêm đơn hàng
const addOrder = (user_id, order_date, total_amount, status, callback) => {
    const query = 'INSERT INTO orders (user_id, order_date, total_amount, status) VALUES (?, ?, ?, ?)';
    connection.query(query, [user_id, order_date, total_amount, status], (err, results) => {
        if (err) {
            console.error('Lỗi khi thêm đơn hàng: ' + err.message);
            return callback(err);
        }
        callback(null, results.insertId);
    });
};

// Hàm để sửa thông tin đơn hàng
const updateOrder = (order_id, total_amount, status, callback) => {
    const query = 'UPDATE orders SET total_amount = ?, status = ? WHERE order_id = ?';
    connection.query(query, [total_amount, status, order_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi cập nhật đơn hàng: ' + err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Hàm để xóa đơn hàng
const deleteOrder = (order_id, callback) => {
    const query = 'DELETE FROM orders WHERE order_id = ?';
    connection.query(query, [order_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi xóa đơn hàng: ' + err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Xuất các hàm
module.exports = {
    addOrder,
    updateOrder,
    deleteOrder
};
