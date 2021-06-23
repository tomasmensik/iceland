const path = require('path');
const express = require('express');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});