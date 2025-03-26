const createUsersTable = require('./table/UserTable');
const createCategoriesTable = require('./table/CategoriesTable');
const createProductsTable = require('./table/ProductTable');
const createReviewsTable = require('./table/ReviewTable');
const createOrdersTable = require('./table/OrderTable');
const createOrderDetailsTable = require('./table/OrderDetailsTable');

// const afterUsersTable = require('./alter/alterUsersTable');
// const afterCategoriesTable = require('./alter/alterCategories');
// const afterProductsTable = require('./alter/alterProductsTable');
// const afterReviewsTable = require('./alter/alterReviewsTable');
// const afterOrdersTable = require('./alter/alterOrdersTable');
// const afterOrderDetailsTable = require('./alter/alterOrderDetailsTable');

const migrate = () => {
    createUsersTable();
    createCategoriesTable();
    createProductsTable();
    createReviewsTable();
    createOrdersTable();
    createOrderDetailsTable();
};
// const migrateAfter = () => {
//     afterUsersTable();
//     afterCategoriesTable();
//     afterProductsTable();
//     afterReviewsTable();
//     afterOrdersTable();
//     afterOrderDetailsTable();
// };
// Gọi hàm migrate
migrate();

//Gọi hàm migrateAfter
// migrateAfter();
