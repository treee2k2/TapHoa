const connection = require('../../config/database');
// Hàm để tạo bảng order_details
const createOrderDetailsTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS order_details (
            order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
            order_id INT,
            product_id INT,
            so_luong INT,
            price DECIMAL(10, 2),
            cost DECIMAL(10, 2),
            FOREIGN KEY (order_id) REFERENCES orders(order_id),
            FOREIGN KEY (product_id) REFERENCES product(product_id)
        )
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Lỗi khi tạo bảng order_details: ' + err.message);
            return;
        }
        console.log('Bảng order_details đã được tạo thành công');
    });
};

// Gọi hàm để tạo bảng
module.exports = createOrderDetailsTable;
