const connection = require('../../config/database');

// Hàm để tạo bảng reviews
const createReviewsTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS reviews (
            review_id INT AUTO_INCREMENT PRIMARY KEY,
            product_id INT,
            user_id INT,
            comment TEXT,
            review_date DATETIME,
            FOREIGN KEY (product_id) REFERENCES product(product_id),
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        )
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Lỗi khi tạo bảng reviews: ' + err.message);
            return;
        }
        console.log('Bảng reviews đã được tạo thành công');
    });
};

// Gọi hàm để tạo bảng
module.exports = createReviewsTable;
