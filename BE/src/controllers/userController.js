const userCRUD = require('../models/CRUD/userCRUD'); // Sử dụng tệp CRUD

// Lấy danh sách người dùng
exports.getUsers = (req, res) => {
    userCRUD.getUsers((err, results) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy danh sách người dùng: ' + err.message);
        }
        res.status(200).json(results); // Trả về danh sách người dùng
    });
};

// Thêm người dùng mới
exports.addUser = (req, res) => {
    const { user_name, pass_word, full_name, email, phone_number, address } = req.body; // Lấy dữ liệu từ yêu cầu

    // Kiểm tra xem user_name đã tồn tại chưa
    userCRUD.getUsers((err, results) => {
        if (err) {
            return res.status(500).send('Lỗi khi kiểm tra người dùng: ' + err.message);
        }
        // Kiểm tra nếu có người dùng nào có user_name trùng
        const userExists = results.some(user => user.user_name === user_name);
        if (userExists) {
            return res.status(400).send('Đã có người sử dụng');
        }

        // Thêm người dùng vào cơ sở dữ liệu
        userCRUD.addUser({ user_name, pass_word, full_name, email, phone_number, address }, (err, insertId) => {
            console.log('Dữ liệu người dùng:', { user_name, pass_word, full_name, email, phone_number, address }); // Thêm thông báo để kiểm tra dữ liệu

            if (err) {
                console.error('Lỗi khi thêm người dùng:', err); // Thêm thông báo lỗi chi tiết
                return res.status(500).send('Lỗi khi thêm người dùng: ' + err.message);
            }
            res.status(201).send('Người dùng đã được thêm với ID: ' + insertId);
        });
    });
};

// Sửa thông tin người dùng theo user_id
exports.updateUser = (req, res) => {
    const { user_id, user_name, full_name, email, phone_number, address } = req.body; // Lấy dữ liệu từ yêu cầu

    userCRUD.updateUser(user_id, { user_name, full_name, email, phone_number, address }, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi cập nhật thông tin người dùng: ' + err.message);
        }
        res.status(200).send('Thông tin người dùng đã được cập nhật');
    });
};

// Đổi mật khẩu người dùng theo user_id
exports.changePassword = (req, res) => {
    const { user_id, pass_word } = req.body; // Lấy dữ liệu từ yêu cầu

    userCRUD.changePassword(user_id, { pass_word }, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi cập nhật mật khẩu người dùng: ' + err.message);
        }
        res.status(200).send('Mật khẩu đã được cập nhật');
    });
};

// Xóa người dùng
exports.deleteUser = (req, res) => {
    const { user_id } = req.body; // Lấy user_id từ yêu cầu

    userCRUD.deleteUser(user_id, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi xóa người dùng: ' + err.message);
        }
        res.status(200).send('Người dùng đã được xóa');
    });
};
