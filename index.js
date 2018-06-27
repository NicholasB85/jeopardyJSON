const fs = require('fs');
const http = require('http');
const hostname = null;
const port = 3000;
const jeopardyData = require("./JeopardyData.js");
const categoryURI = "http://jservice.io/api/categories?count=100&offset=";
const randomOffset = Math.floor(Math.random() * 18000);

jeopardyData(categoryURI + randomOffset)
    .then(hydratedBody => {
        console.log(hydratedBody);
        fs.writeFile('categories.json', JSON.stringify(hydratedBody), 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch(error => console.log(error))