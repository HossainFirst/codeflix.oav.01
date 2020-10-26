const fs = require('fs');

let fileContent = fs.readFileSync('env').toString()
let regex = /.*:.*/gm;
fileContent = fileContent.replace(/=/gm, ' \" : \" ');
let found = fileContent.match(regex)


fs.open("env.json",'w+', function (err, fileDescriptor){
    console.log("erreur"); })


fs.writeFileSync('env.json', JSON.stringify(found, null, '\t') );
console.log(found);

//console.log(found);
