var students = [
    { "name": "Arjun", "marks": 500 },
    { "name": "Sam", "marks": 450 },
    { "name": "Barman", "marks": 400 },
    { "name": "Danny", "marks": 350 }
  ];

 
  for (var i=0; i<students.length; i++){
    console.log(students[i]);
  }

  for (var key in students) {
    console.log(key, students[key])
  }

  for (var key of students){
    console.log(key)
  }

  students.forEach((key) => {
    console.log(key)
  });