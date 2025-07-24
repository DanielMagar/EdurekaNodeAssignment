const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filenamesFile = 'filenames.txt';
let filenames = [];

// Load existing filenames
if (fs.existsSync(filenamesFile)) {
  const data = fs.readFileSync(filenamesFile, 'utf-8');
  filenames = data.split('\n').filter(Boolean);
}

// Ask for new filename
function askFilename() {
  rl.question('Enter a new filename (with .txt extension): ', (filename) => {
    if (filenames.includes(filename) || fs.existsSync(filename)) {
      console.log('File already exists. Please choose another name.');
      askFilename();
    } else {
      // Write "You are awesome" to the file
      fs.writeFileSync(filename, 'You are awesome');
      console.log(`✅ File '${filename}' created.`);

      // Save filename to array and file
      filenames.push(filename);
      fs.writeFileSync(filenamesFile, filenames.join('\n'));

      rl.close();
    }
  });
}

askFilename();
