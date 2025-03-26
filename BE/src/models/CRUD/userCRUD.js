const { User } = require('../sequelize/userSequelize'); // Sửa đổi để nhập đúng mô hình User


// Hàm để lấy danh sách người dùng
const getUsers = (callback) => {
    User.findAll()
        .then(results => callback(null, results))
        .catch(err => callback(err));
};

// Hàm để thêm người dùng
const addUser = (userData, callback) => {
    User.create({ ...userData, role: 1 }) // Thêm role với giá trị mặc định là 1

        .then(user => callback(null, user.user_id))
        .catch(err => callback(err));
};

// Hàm để cập nhật thông tin người dùng
const updateUser = (user_id, userData, callback) => {
    User.update(userData, { where: { user_id } })
        .then(results => callback(null, results))
        .catch(err => callback(err));
};

// Hàm để cập nhật thông tin người dùng
const changePassword = (user_id, userData, callback) => {
    User.update(userData, { where: { user_id } })
        .then(results => callback(null, results))
        .catch(err => callback(err));
};

// Hàm để xóa người dùng
const deleteUser = (user_id, callback) => {
    User.destroy({ where: { user_id } })
        .then(results => callback(null, results))
        .catch(err => callback(err));
};

// Xuất các hàm
module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    changePassword
};
