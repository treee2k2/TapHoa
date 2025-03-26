const connection = require('../../config/database');
// Hàm để tạo bảng product
const createProductTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS product (
            product_id INT AUTO_INCREMENT PRIMARY KEY,
            category_id INT,
            price DECIMAL(10, 2),
            description TEXT,
            image_url VARCHAR(255),
            so_luong INT,
            FOREIGN KEY (category_id) REFERENCES categories(category_id)
        )
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Lỗi khi tạo bảng product: ' + err.message);
            return;
        }
        console.log('Bảng product đã được tạo thành công');
    });
};

// Gọi hàm để tạo bảng
module.exports = createProductTable;
