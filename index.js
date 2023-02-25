const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');

// Template Engine
app.set("view engine", "ejs");
app.set("views", "views");

const port = process.env.PORT;

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/shop', contactRoutes);
app.use('/shop', successRoutes);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})