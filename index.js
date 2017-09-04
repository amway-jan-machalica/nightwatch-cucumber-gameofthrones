var express = require('express');
var app = express();
var hbs = require('express-hbs');

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: __dirname + '/views/layouts/main'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/vesteros', (req, res) => {
  res.render('vesteros');
});

app.get('/essos', (req, res) => {
  res.render('essos');
});

app.get('/', (req, res) => {
  res.render('map');
})

app.get('/testexpress', function (req, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});