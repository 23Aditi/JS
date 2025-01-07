require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URI;

async function connectToDb() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Database Connected!");
        return client;
    } catch (err) {
        console.error("Error connecting to database:", err);
    }
}

connectToDb();