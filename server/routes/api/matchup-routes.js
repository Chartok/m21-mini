const router = require('express').Router();
const {
  getAllMatchups,
  createMatchup,
  getMatchup,
  createVote,
} = require('../../_controllers_/matchup-controller');

router.route('/').get(getAllMatchups);
router.route('/').post(createMatchup);
router.route('/:id').get(getMatchup);
router.route('/:id').put(createVote);

module.exports = router;
