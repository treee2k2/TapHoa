const Review = require('../models/CRUD/reviewModel');

// Lấy danh sách đánh giá
exports.getReviews = (req, res) => {
    const query = 'SELECT * FROM reviews'; // Truy vấn SQL để lấy danh sách đánh giá
    Review.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Lỗi khi lấy danh sách đánh giá: ' + err.message);
        }
        res.status(200).json(results); // Trả về danh sách đánh giá
    });
};

// Thêm đánh giá mới
exports.addReview = (req, res) => {
    const { product_id, user_id, comment, review_date } = req.body; // Lấy dữ liệu từ yêu cầu

    Review.addReview(product_id, user_id, comment, review_date, (err, reviewId) => {
        if (err) {
            return res.status(500).send('Lỗi khi thêm đánh giá: ' + err.message);
        }
        res.status(201).send('Đánh giá đã được thêm với ID: ' + reviewId);
    });
};

// Sửa đánh giá
exports.updateReview = (req, res) => {
    const { review_id, comment } = req.body; // Lấy dữ liệu từ yêu cầu

    Review.updateReview(review_id, comment, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi cập nhật đánh giá: ' + err.message);
        }
        res.status(200).send('Đánh giá đã được cập nhật');
    });
};

// Xóa đánh giá
exports.deleteReview = (req, res) => {
    const { review_id } = req.body; // Lấy review_id từ yêu cầu

    Review.deleteReview(review_id, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi xóa đánh giá: ' + err.message);
        }
        res.status(200).send('Đánh giá đã được xóa');
    });
};
