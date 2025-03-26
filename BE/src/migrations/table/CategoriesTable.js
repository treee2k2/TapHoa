const connection = require('../../config/database');
// Hàm để tạo bảng categories
const createCategoriesTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS categories (
            category_id INT AUTO_INCREMENT PRIMARY KEY,
            category_name VARCHAR(255) NOT NULL,
            description TEXT
        )
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Lỗi khi tạo bảng categories: ' + err.message);
            return;
        }
        console.log('Bảng categories đã được tạo thành công');
    });
};

// Gọi hàm để tạo bảng
module.exports = createCategoriesTable;
