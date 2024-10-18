const Enrollment = require('../models/Enrollment');

exports.enrollUser = async (req, res) => {
  const { courseId } = req.body;
  const enrollment = await Enrollment.create({ user: req.user._id, course: courseId });
  res.status(201).json(enrollment);
};

exports.getEnrollments = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id }).populate('course');
  res.json(enrollments);
};
