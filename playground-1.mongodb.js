/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

/*const database = 'airbnb';
const collection = 'test1';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);*/

// The prototype form to create a collection:
db.createCollection( "test1",
  {
    capped: boolean,
    autoIndexId: boolean,
    size: number,
    max: number,
    storageEngine: document,
    validationLevel: string,
    validationAction: string,
    viewOn: string,
    
    expireAfterSeconds: number,
  }
)

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/

mongorestore --db <nombre-base-datos> <ruta-de-exportacion>
  
mongoimport --db dbName --collection collectionName --file inputFile