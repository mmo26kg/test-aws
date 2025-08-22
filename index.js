const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Chào mừng bạn đến với ứng dụng Node.js trên Nguyen Hong Duc!');
});

app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
});