const express = require('express');
const morgan = require('morgan');
const handlebar = require('express-handlebars');
const path = require('path');
const route = require('./routes/index'); // tu dong tim file index.js tron ./routes

const app = express();

const port = 3000;

// web server tra ve nhung thu co trong duong dan /public
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan('combined'));
app.engine(
    'hbs',
    handlebar.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);

app.listen(port, () => console.log(`listening on ${port}`));
