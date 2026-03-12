// 변수선언
let studentName; // 이름
let testScore; // 점수
const maxScore = 100; // 최대 점수
var grade; // 등급

// 프롬프트창에서 점수 입력
studentName = prompt("이름을 입력하세요");
testScore = Number(prompt("점수를 입력하세요."));
testScore = testScore + 5;

// 조건문(if문)으로 등급 부여
if(testScore >= 100) {
    grade = "S";
}else if(testScore >= 90 && testScore < 100) {
    grade = "A";    
}else if(testScore >= 80 && testScore < 90) {
    grade = "B";
}else if(testScore >= 70 && testScore < 80) {
    grade = "C";
}else if(testScore >=60 && testScore < 70) {
    grade = "D";
}else if(testScore < 60) {
    grade = "F";
}

// 조건문(switch)로 결과 출력 
switch(grade) {
    case "S" : alert(`Name: ${studentName}\nFinal Score: ${testScore}\nGrade: S\nStatue: Pass\nMessage: uper!!`);
    break;
    case "A" : alert(`Name: ${studentName}\nFinal Score: ${testScore}\nGrade: A\nStatue: Pass\nMessage: Excellent work!`);
    break;
    case "B" : alert(`Name: ${studentName}\nFinal Score: ${testScore}\nGrade: B\nStatue: Pass\nMessage: Good job!`);
    break;
    case "C" : alert(`Name: ${studentName}\nFinal Score: ${testScore}\nGrade: C\nStatue: Pass\nMessage: Satisfactory performance.`);
    break;
    case "D" : alert(`Name: ${studentName}\nFinal Score: ${testScore}\nGrade: C\nStatue: Pass\nMessage: Needs improvement.`);
    break;
    case "F" : alert(`Name: ${studentName}\nFinal Score: ${testScore}\nGrade: C\nStatue: Fail\nMessage: Please try harder!`);
    break;
    default : alert("점수 입력에 오류가 있습니다.\n점수(1~100)를 재입력하세요.")
    break;
}