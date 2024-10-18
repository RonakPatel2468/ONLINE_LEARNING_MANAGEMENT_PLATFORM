const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  const course = await Course.create({ title, description, createdBy: req.user._id });
  res.status(201).json(course);
};

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};

exports.updateCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    course.title = req.body.title || course.title;
    course.description = req.body.description || course.description;
    await course.save();
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};

exports.deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    await course.remove();
    res.json({ message: 'Course removed' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};
