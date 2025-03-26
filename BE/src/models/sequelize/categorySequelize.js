const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../../config/database'); // Kết nối đến cơ sở dữ liệu

// Định nghĩa mô hình Category
const Category = connection.define('Category', {
    category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'categories',
    timestamps: false // Nếu không sử dụng timestamps
});

// Xuất mô hình Category
module.exports = { Category };
