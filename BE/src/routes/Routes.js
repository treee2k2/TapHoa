const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const orderDetailsController = require('../controllers/orderDetailsController');
const reviewController = require('../controllers/reviewController');

// users(test xong)
router.get('/users', userController.getUsers);
router.post('/users/create-user', userController.addUser);
router.put('/users/update-user', userController.updateUser);
router.put('/users/change-pass', userController.changePassword);
router.delete('/users/delete-user', userController.deleteUser);

// category(xong)
router.get('/categories', categoryController.getCategories);
router.get('/categories/:category_id', categoryController.getCategoryById);
router.post('/categories/create-categories', categoryController.addCategory);
router.put('/categories/update-categories', categoryController.updateCategory);
router.delete('/categories/delete-categories', categoryController.deleteCategory);

//product
router.get('/products', productController.getProducts);
router.post('/products/create-product', productController.addProduct);
router.put('/products/update-product', productController.updateProduct);
router.delete('/products/delete-product', productController.deleteProduct);

//order
router.get('/orders', orderController.getOrders);
router.post('/orders/create-orders', orderController.addOrder);
router.put('/orders/update-orders', orderController.updateOrder);
router.delete('/orders/delete-orders', orderController.deleteOrder);

//orderDetails
router.get('/orderDetails', orderDetailsController.getOrderDetails);
router.post('/orderDetails/create-orderDetails', orderDetailsController.addOrderDetail);
router.put('/orderDetails/update-orderDetails', orderDetailsController.updateOrderDetail);
router.delete('/orderDetails/delete-orderDetails', orderDetailsController.deleteOrderDetail);

//review
router.get('/reviews', reviewController.getReviews);
router.post('/reviews/create-reviews', reviewController.addReview);
router.put('/reviews/update-reviews', reviewController.updateReview);
router.delete('/reviews/delete-reviews', reviewController.deleteReview);


// // Route để lấy danh sách các bảng
// router.get('/tables', userController.getTables); // Thêm route để lấy danh sách các bảng

// // Route để tạo bảng mới
// router.post('/create-table', userController.createTable); // Thêm route để tạo bảng mới

module.exports = router;
