const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../../config/database'); // Kết nối đến cơ sở dữ liệu

// Định nghĩa mô hình User
const User = connection.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pass_word: {
        type: DataTypes.STRING,
        allowNull: false // Thêm ràng buộc NOT NULL
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false // Thêm ràng buộc NOT NULL
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1 // Mặc định là khách hàng
    }
}, {
    tableName: 'users',
    timestamps: false // Nếu không sử dụng timestamps
});

// Xuất mô hình User
module.exports = { User };
