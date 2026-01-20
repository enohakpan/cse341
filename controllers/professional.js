const mongodb = require('../db/mongo');
const ObjectId = require('mongodb').ObjectId;

const getAllData = async (req, res, next) => {
  const result = await mongodb.getDb().db('cse341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getData = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: id });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};


const createData = async (req, res, next) => {
  const professional = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db('cse341').collection('contacts').insertOne(professional);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact. Please try again later, thank you');
  }
};


const updateData = async (req, res, next) => {
  const id = new ObjectId(req.params.id);
  const professional = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDb().db('cse341').collection('contacts').replaceOne({ _id: id }, professional);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Error updating contact.');
  }
};

const deleteData = async (req, res, next) => {
  const id = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('cse341').collection('contacts').deleteOne({ _id: id });
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};  
module.exports = { getData, getAllData, createData, updateData, deleteData };

