const connection = require('../../config/database');
// Hàm để tạo bảng orders
const createOrdersTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS orders (
            order_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            order_date DATETIME,
            total_amount DECIMAL(10, 2),
            status VARCHAR(50),
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        )
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Lỗi khi tạo bảng orders: ' + err.message);
            return;
        }
        console.log('Bảng orders đã được tạo thành công');
    });
};

// Gọi hàm để tạo bảng
module.exports = createOrdersTable;
