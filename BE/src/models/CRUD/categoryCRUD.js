const { Category } = require('../sequelize/categorySequelize'); // Sử dụng mô hình Category từ categorySequelize

// lấy ra tất cả danh mục
const getCategories = async () => {
    try {
        const categories = await Category.findAll();
        return categories; // Trả về danh sách danh mục
    } catch (err) {
        console.error('Lỗi khi lấy danh mục: ' + err.message);
        throw err; // Ném lỗi để xử lý ở nơi gọi
    }
};

// Hàm để lấy danh mục theo category_id
const getCategoryById = async (category_id) => {
    try {
        const category = await Category.findOne({ where: { category_id: category_id } });

        return category; // Trả về danh mục
    } catch (err) {
        console.error('Lỗi khi lấy danh mục theo ID: ' + err.message);
        throw err; // Ném lỗi để xử lý ở nơi gọi
    }
};


// Hàm để thêm danh mục
const addCategory = async (category_name, description) => {
    try {
        const category = await Category.create({ category_name, description });
        return category.category_id; // Trả về ID của danh mục vừa thêm
    } catch (err) {
        console.error('Lỗi khi thêm danh mục: ' + err.message);
        throw err; // Ném lỗi để xử lý ở nơi gọi
    }
};


// Hàm để sửa thông tin danh mục
const updateCategory = async (category_id, category_name, description) => {
    try {
await Category.update({ category_name, description }, { where: { category_id: category_id } });

    } catch (err) {
        console.error('Lỗi khi cập nhật danh mục: ' + err.message);
        throw err; // Ném lỗi để xử lý ở nơi gọi
    }
};

// Hàm để xóa danh mục
const deleteCategory = async (category_id) => {
    try {
        await Category.destroy({ where: { id: category_id } });
    } catch (err) {
        console.error('Lỗi khi xóa danh mục: ' + err.message);
        throw err; // Ném lỗi để xử lý ở nơi gọi
    }
};



// Xuất các hàm
module.exports = {
    addCategory,
    updateCategory,
    deleteCategory,
    getCategories,
    getCategoryById
};
