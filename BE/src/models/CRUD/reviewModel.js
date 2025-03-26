const connection = require('../../config/database'); // Sử dụng kết nối từ database.js

// Hàm để thêm đánh giá
const addReview = (product_id, user_id, comment, review_date, callback) => {
    const query = 'INSERT INTO reviews (product_id, user_id, comment, review_date) VALUES (?, ?, ?, ?)';
    connection.query(query, [product_id, user_id, comment, review_date], (err, results) => {
        if (err) {
            console.error('Lỗi khi thêm đánh giá: ' + err.message);
            return callback(err);
        }
        callback(null, results.insertId);
    });
};

// Hàm để sửa đánh giá
const updateReview = (review_id, comment, callback) => {
    const query = 'UPDATE reviews SET comment = ? WHERE review_id = ?';
    connection.query(query, [comment, review_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi cập nhật đánh giá: ' + err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Hàm để xóa đánh giá
const deleteReview = (review_id, callback) => {
    const query = 'DELETE FROM reviews WHERE review_id = ?';
    connection.query(query, [review_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi xóa đánh giá: ' + err.message);
            return callback(err);
        }
        callback(null, results);
    });
};

// Xuất các hàm
module.exports = {
    addReview,
    updateReview,
    deleteReview
};
