const path = require('path')

console.log(path.sep)

const pathName = path.join("/content","/subfolder","text.txt");
console.log(pathName);


const absolute = path.resolve(__dirname,"content","subfolder","text.txt");
console.log(absolute);
const base = path.basename(pathName);
console.log(base);

