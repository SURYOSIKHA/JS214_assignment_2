function calculateFinalGrades(students){
    return students.map(student=>{
        const{id,name,scores}=student;
        if(scores.length===0){
            return null;
        }
        const sumOfScores=scores.reduce((acc,curr)=>acc+curr,0);
        const finalGrade=Math.round(sumOfScores/scores.length);
        return {id,name,finalGrade};
    })
    .filter(student=>student!==null && student.finalGrade>=70);
}


// Input
const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 80, 78] },
  ];
  
  // Output
  const passedStudents = calculateFinalGrades(students);
  console.log(passedStudents);
  // Output should be:
  // [
  //   { id: 1, name: "Alice", finalGrade: 89 },
  //   { id: 2, name: "Bob", finalGrade: 70 },
  //   { id: 4, name: "David", finalGrade: 78 }
  // ]
  
  