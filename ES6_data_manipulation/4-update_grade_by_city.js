export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!(studentsList instanceof Array)) {
    return [];
  }

  function addGrade(student) {
    newGrades.forEach((person) => {
      if (person.studentId === student.id) {
        student.grade = person.grade;
      }
    });

    if (student.grade === undefined) {
      student.grade = 'N/A';
    }
    return student;
  }

  const filteredStudentList = studentsList.filter((students) => students.location === city);
  return filteredStudentList.map(addGrade);
}
