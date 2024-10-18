const express = require('express');
const { enrollUser, getEnrollments } = require('../controllers/enrollmentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, enrollUser);
router.get('/', protect, getEnrollments);

module.exports = router;
