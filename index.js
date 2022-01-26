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

app.use('/assets', express.static('assets'));

/**
 * Sword image: http://www.i2clipart.com/cliparts/e/a/2/1/clipart-sword-ea21.png
 */
app.get('/vesteros', (req, res) => {
    res.render('vesteros',
        {
            families: [
                'Lannister',
                'Baratheon',
                'Stark',
                'Tyrell'
            ],
            pageTitle: 'Vesteros'
        });
});

app.get('/essos', (req, res) => {
    res.render('essos', {
        pageTitle: 'Essos'
    });
});

app.get('/', (req, res) => {
    res.render('map', {
        pageTitle: 'Map'
    });
})

app.get('/testexpress', function (req, res) {
    res.send('hello world');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

hbs.registerHelper('lowerCase', function (str) {
    return str.toLowerCase();
});