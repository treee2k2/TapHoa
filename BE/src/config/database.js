const { Sequelize } = require('sequelize');
require('dotenv').config();

// Tạo kết nối đến cơ sở dữ liệu bằng Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

// Kiểm tra kết nối
sequelize.authenticate()
    .then(() => {
        console.log('Đã kết nối đến cơ sở dữ liệu với Sequelize.');
    })
    .catch(err => {
        console.error('Lỗi kết nối đến cơ sở dữ liệu: ' + err);
    });

// Xuất kết nối
module.exports = sequelize;
