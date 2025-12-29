const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = await Contact.create({
      name,
      email,
      message,
    });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
