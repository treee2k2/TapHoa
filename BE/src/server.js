const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
let PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api', require('./routes/Routes'));

// Test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Hàm để kiểm tra cổng
const findAvailablePort = (port, callback) => {
    const server = app.listen(port, (err) => {
        if (err) {
            callback(port + 1); // Nếu có lỗi, thử cổng tiếp theo
        } else {
            callback(port); // Cổng khả dụng
        }
    });

    server.on('error', () => {
        callback(port + 1); // Nếu cổng đã được sử dụng, thử cổng tiếp theo
    });
};

// Tìm cổng khả dụng và khởi động máy chủ
findAvailablePort(PORT, (availablePort) => {
    console.log(`Server is running on port ${availablePort}`);
});