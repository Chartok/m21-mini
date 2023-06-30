const router = require('express').Router();
const { getAllTech } = require('../../_controllers_/tech-controller');

router.route('/').get(getAllTech);

module.exports = router;
