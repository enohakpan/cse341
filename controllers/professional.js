const mongodb = require('../db/mongo');
const ObjectId = require('mongodb').ObjectId;

const getAllData = async (req, res, next) => {
  const result = await mongodb.getDb().db('cse341').collection('professionals').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getData = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('cse341').collection('professionals').find({ _id: id });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getData, getAllData };