const { MongoClient } = require('mongodb');
require('dotenv').config();

function connectDatabase() {
  const client = MongoClient.connect(process.env.MONGO_DB_URI);
  return client;
}

async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}

module.exports = {
  connectDatabase,
  insertDocument,
  getAllDocuments,
};
