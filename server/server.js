const sqlite = require('sqlite3');
const express = require('express');
const { Sequelize } = require('sequelize');

const MovesetModel = require('./models/MovesetModel');

var app = express();

const HTTP_PORT = 8000
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './db/kitsune.db'
});

//TODO: Add information to sqliteDB and 

try {
    db.authenticate().then(() => {
        console.log(`Connection has been established successfully.`);

        //Sync DB models to sqliteDB
        MovesetModel.init(db, `kunimitsuMoveSet`);

        //Sync up the models we have with the database
        db.sync().then(() => {
            console.log(`Sequelize Initilized.`);

            //Start the web server on HTTP_PORT
            app.listen(HTTP_PORT, () => {
                console.log(`REST Server listening on: ${HTTP_PORT}`);
            });
        });
    });
} catch (error) {
    console.error(`Unable to connect to database: ${error}`);
}







// let dbTableName = "";
// const db = new sqlite.Database('./db/kitsune.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE, (err) => {
//     if(err) {
//         console.error(`Error opening Database: ${err.message}`);
//         return;
//     }

//     db.run(`CREATE TABLE ${dbTableName}( \
//         move_name NVARCHAR(20),\
//         move_hitcount INTEGER,\
//         move_hitlocation NVARCHAR(20)\
//     ) If NOT EXISTS`, (err) => {
//         if(err) {
//             console.error(`Error: ${err.message}`);
//         }

//         let sql = `INSERT INTO ${dbTableName}(move_name, move_hitcount)`
//     });
// });