const connection = require('../../config/database');

// Hàm để tạo bảng users
const createUsersTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            user_name VARCHAR(255) NOT NULL,
            pass_word VARCHAR(255) NOT NULL,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255),
            phone_number VARCHAR(20),
            address TEXT

        )
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Lỗi khi tạo bảng users: ' + err.message);
            return;
        }
        console.log('Bảng users đã được tạo thành công');
    });
};

// Gọi hàm để tạo bảng
module.exports = createUsersTable;
