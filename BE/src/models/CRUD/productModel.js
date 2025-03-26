const connection = require('../../config/database'); // Sử dụng kết nối từ database.js

// Hàm để thêm sản phẩm
const addProduct = (category_id, price, description, image_url, so_luong, callback) => {
    const query = 'INSERT INTO product (category_id, price, description, image_url, so_luong) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [category_id, price, description, image_url, so_luong], (err, results) => {
        if (err) {
            console.error('Lỗi khi thêm sản phẩm: ' + err.message);
            return callback(err);
        }
        callback(null, results.insertId);
    });
};

// Hàm để sửa thông tin sản phẩm
const updateProduct = (product_id, price, description, so_luong, callback) => {
    const query = 'UPDATE product SET price = ?, description = ?, so_luong = ? WHERE product_id = ?';
    connection.query(query, [price, description, so_luong, product_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi cập nhật sản phẩm: ' + err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Hàm để xóa sản phẩm
const deleteProduct = (product_id, callback) => {
    const query = 'DELETE FROM product WHERE product_id = ?';
    connection.query(query, [product_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi xóa sản phẩm: ' + err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Xuất các hàm
module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
};
