const express = require('express');
const fs = require('fs');
const cowsay = require('cowsay');
const dns = require('dns');

const app = express();




app.get('get', (req, res) => {
    const { filename, data } = req.body;
    fs.appendFile(filename, data, (err) => {
      if (err) {
        res.status(500).send({ message: 'Error get data' });
      } else {
        res.send({ message: `File ${filename} created successfully` });
      }
    });
  });
  
app.post('/file/create', (req, res) => {
  const { filename, data } = req.body;
  fs.appendFile(filename, data, (err) => {
    if (err) {
      res.status(500).send({ message: 'Error creating file' });
    } else {
      res.send({ message: `File ${filename} created successfully` });
    }
  });
});

app.put('/file/update', (req, res) => {
  const { filename, data } = req.body;
  fs.writeFile(filename, data, (err) => {
    if (err) {
      res.status(500).send({ message: 'Error updating file' });
    } else {
      res.send({ message: `File ${filename} updated successfully` });
    }
  });
});

app.delete('/file/delete', (req, res) => {
  const { filename } = req.body;
  fs.unlink(filename, (err) => {
    if (err) {
      res.status(500).send({ message: 'Error deleting file' });
    } else {
      res.send({ message: `File ${filename} deleted successfully` });
    }
  });
});


app.listen(8090, () => {
  console.log('Server listening on port 8090');
});

