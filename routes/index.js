const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  res.send('Welcome to the CSE341 API');
});

router.use('/professional', require('./professional'));

module.exports = router;