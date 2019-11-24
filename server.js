const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const ndjson = require('ndjson'); 
const cors = require('cors');
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));


app.get('/data', (req, res) => {
  let readStream = fs.createReadStream(__dirname + '/public/plot.ndjson').pipe(ndjson.parse());
  
  const chunks = [];
  readStream.on('data', (data) => {
    chunks.push(JSON.stringify(data));
  });

  // readStream.on('end', () => {
  //   while (chunks.length) {
  //     res.write(chunks.shift() + '\n');
  //   }
  //   res.end();
  // });

  readStream.on('end', () => {
    var id = setInterval(() => {
      if (chunks.length) {
        res.write(chunks.shift() + '\n');
      } else {
        clearInterval(id);
        res.end();
      }
    }, 100);
  });
});

app.listen(9000, () => {
  console.log('Example app listening on port 9000!');
});