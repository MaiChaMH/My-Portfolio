//app.js, Jian Heng Wu Wu, 301225095, Oct 5 2023
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
