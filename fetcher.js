const request = require('request');
const fs = require('fs');

const fileURL = process.argv[2];
const fileLocation = process.argv[3];

if (!fileURL || !fileLocation) {
  console.log("Please enter both file location and URL");
  return;
}


request(fileURL, (err, res, body) => {
  if (!err) {
    callbackfn(body);
  } else {
    console.log(`Request error : ${err}`);
  }
});
  
const callbackfn = (data) => {
  if (data !== undefined) {
    fs.writeFile(fileLocation, data, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Downloaded and saved ${fs.statSync(fileLocation).size} bytes to ${fileLocation}`);
    });
  }
};