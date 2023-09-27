var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/hostname', function(req, res, next)
{
  console.log(process.env.hostname);
});

router.get('/portnumber', function(req, res, next)
{
  res.send('' + 3000);
});

module.exports = router;
