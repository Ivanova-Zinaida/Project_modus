const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
 
app.set('views', path.join(__dirname, 'views'));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/blog', (req, res)=>{
    res.render('blog');
});

app.get('/contacts', (req, res)=>{
    res.render('contacts');
});

app.get('/features', (req, res)=>{
    res.render('features');
});

app.get('/services', (req, res)=>{
    res.render('services');
});

app.get('/portfolio', (req, res)=>{
    res.render('portfolio');
});

app.get('/', (req, res)=>{
    res.render('index');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))