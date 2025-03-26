const Category = require('../models/CRUD/categoryCRUD');

// Lấy danh sách danh mục
exports.getCategories = async (req, res) => {
    try {
        const results = await Category.getCategories();
        res.status(200).json(results); // Trả về danh sách danh mục
        console.log("Lấy danh sách Categories thành công!"); // Thêm thông báo
    } catch (err) {
        return res.status(500).send('Lỗi khi lấy danh sách danh mục: ' + err.message);
    }
};

// Lấy danh mục theo category_id
exports.getCategoryById = async (req, res) => {
    const { category_id } = req.params; // Lấy category_id từ tham số URL

    try {
        const category = await Category.getCategoryById(category_id);
        if (!category) {
            return res.status(404).send('Danh mục không tồn tại');
        }
        res.status(200).json(category); // Trả về danh mục
        console.log("Lấy danh mục thành công!"); // Thêm thông báo
    } catch (err) {
        return res.status(500).send('Lỗi khi lấy danh mục: ' + err.message);
    }
};
// thêm danh mục
exports.addCategory = async (req, res) => {
    const { category_name, description } = req.body; // Lấy dữ liệu từ yêu cầu

    try {
        const categoryId = await Category.addCategory(category_name, description);
        res.status(201).send('Danh mục đã được thêm với ID: ' + categoryId);
        console.log("Thêm danh mục thành công!"); // Thêm thông báo
    } catch (err) {
        console.error('Lỗi khi thêm danh mục: ' + err.message);
        return res.status(500).send('Lỗi khi thêm danh mục: ' + err.message);
    }

};

// Sửa thông tin danh mục
exports.updateCategory = async (req, res) => {
    const { category_id, category_name, description } = req.body; // Lấy dữ liệu từ yêu cầu

    try {
        await Category.updateCategory(category_id, category_name, description);
        res.status(200).send('Danh mục đã được cập nhật với ID: ' + category_id);
        console.log("Cập nhật danh mục thành công!"); // Thêm thông báo
    } catch (err) {
        return res.status(500).send('Lỗi khi cập nhật danh mục: ' + err.message);
    }
};

// Xóa danh mục
exports.deleteCategory = (req, res) => {
    const { category_id } = req.body; // Lấy category_id từ yêu cầu

    Category.deleteCategory(category_id, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi xóa danh mục: ' + err.message);
        }
        res.status(200).send('Danh mục đã được xóa');
    });
};
