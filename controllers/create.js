const mongodb = require('../db/mongo');

const createProfessional = async (req, res, next) => {
  try {
    const professional = {
      professionalName: req.body.professionalName,
      base64Image: req.body.base64Image,
      nameLink: req.body.nameLink,
      primaryDescription: req.body.primaryDescription,
      workDescription1: req.body.workDescription1,
      workDescription2: req.body.workDescription2,
      linkTitleText: req.body.linkTitleText,
      linkedInLink: req.body.linkedInLink,
      githubLink: req.body.githubLink
    };

    const result = await mongodb.getDb().db().collection('professional').insertOne(professional);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({ message: 'Professional data created', id: result.insertedId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create data' });
  }
};

module.exports = { createProfessional };