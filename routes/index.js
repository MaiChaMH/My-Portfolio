//index.js, Jian Heng Wu Wu, 301225095, Oct 5 2023
const express = require('express');
const router = express.Router();

//router gets
router.get('/', (req, res) => {
  res.render('home', { title: 'Home', year: new Date().getFullYear() });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me', year: new Date().getFullYear() });
});

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', year: new Date().getFullYear() });
});

router.get('/services', (req, res) => {
  res.render('services', { title: 'Services', year: new Date().getFullYear() });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me', year: new Date().getFullYear() });
});

//post function for the form
router.post('/contact', (req, res) => {
  const { firstName, lastName, email, contactNumber, message } = req.body;
  res.redirect('/');
});

module.exports = router;
