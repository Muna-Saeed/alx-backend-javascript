import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = req.app.get('database');
      const fields = await readDatabase(database);

      let responseText = 'This is the list of our students\n';
      let totalStudents = 0;

      Object.keys(fields).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach(field => {
        const students = fields[field];
        totalStudents += students.length;
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      responseText = `Number of students: ${totalStudents}\n${responseText}`;
      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const major = req.params.major.toUpperCase();
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }

      const database = req.app.get('database');
      const fields = await readDatabase(database);
      const students = fields[major] || [];

      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
