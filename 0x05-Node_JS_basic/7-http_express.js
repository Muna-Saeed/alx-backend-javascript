// // more complex HTTP server using Express
const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = database => {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter(line => line !== '');
      const students = lines.slice(1);
      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      resolve(fields);
    });
  });
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  countStudents(database)
    .then((fields) => {
      let responseText = 'This is the list of our students\n';
      let totalStudents = 0;

      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
          const students = fields[field];
          totalStudents += students.length;
          responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }
      }

      responseText = `Number of students: ${totalStudents}\n${responseText}`;
      res.send(responseText.trim());
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
