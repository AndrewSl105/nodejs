const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express(bodyParser);

app.engine('ejs', require('ejs').__express);

app.set('view engine', 'ejs');
app.set('views', 'views');

const rootDir = require('./util/path')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Not found'
    })
})

app.listen(5000)