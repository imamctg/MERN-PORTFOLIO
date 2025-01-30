const router = require("express").Router();

const {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} = require("../models/portfolioModel");
const User = require("../models/userModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const courses = await Course.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences,
      projects: projects,
      courses: courses,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Update intro */
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully !",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
/* Update About */
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: about,
      success: true,
      message: about.message,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add Projects

router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project Added Successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete Project
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update Project
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add course
router.post("/add-course", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(200).send({
      data: course,
      success: true,
      message: "Course added successfully",
    });
  } catch (error) {
    console.log("hello 8888");
    res.status(500).send(error);
  }
});

// Update course
router.post("/update-course", async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: course,
      success: true,
      message: "Course Updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete course
router.post("/delete-course", async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: course,
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update Contact
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "User login successfully !",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "User Or Password Invalid",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
