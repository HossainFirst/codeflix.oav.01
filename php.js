const fs = require('fs');

let fileContent = fs.readFileSync('php.ini').toString()
let regex = /.*=.*/gm;
//fileContent = fileContent.replace(/=/gm, ":");
let found = fileContent.match(regex)


fs.open("php.json",'w+', function (err, fileDescriptor){
    console.log("erreur"); })


fs.writeFileSync('php.json', JSON.stringify(found, null, '\t') );
console.log(found);


