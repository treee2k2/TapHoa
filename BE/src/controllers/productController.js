const Product = require('../models/CRUD/productModel');

// Lấy danh sách sản phẩm
exports.getProducts = (req, res) => {
    const query = 'SELECT * FROM product'; // Truy vấn SQL để lấy danh sách sản phẩm
    Product.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy danh sách sản phẩm: ' + err.message);
        }
        res.status(200).json(results); // Trả về danh sách sản phẩm
    });
};

// Thêm sản phẩm mới
exports.addProduct = (req, res) => {
    const { category_id, price, description, image_url, so_luong } = req.body; // Lấy dữ liệu từ yêu cầu

    Product.addProduct(category_id, price, description, image_url, so_luong, (err, productId) => {
        if (err) {
            return res.status(500).send('Lỗi khi thêm sản phẩm: ' + err.message);
        }
        res.status(201).send('Sản phẩm đã được thêm với ID: ' + productId);
    });
};

// Sửa thông tin sản phẩm
exports.updateProduct = (req, res) => {
    const { product_id, price, description, so_luong } = req.body; // Lấy dữ liệu từ yêu cầu

    Product.updateProduct(product_id, price, description, so_luong, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi cập nhật sản phẩm: ' + err.message);
        }
        res.status(200).send('Sản phẩm đã được cập nhật');
    });
};

// Xóa sản phẩm
exports.deleteProduct = (req, res) => {
    const { product_id } = req.body; // Lấy product_id từ yêu cầu

    Product.deleteProduct(product_id, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi xóa sản phẩm: ' + err.message);
        }
        res.status(200).send('Sản phẩm đã được xóa');
    });
};
