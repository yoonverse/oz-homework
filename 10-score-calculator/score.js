const maxScore = 100; // 최대 점수
var grade; // 등급

// 프롬프트창에서 점수 입력
let studentName = prompt("이름을 입력하세요");
let testScore = Number(prompt("점수를 입력하세요. (0~100)"));
let finalScore = testScore + 5;


// --------------------
// 등급 판별 (if문 사용)
// --------------------
if(finalScore >= 100) {
    grade = "S";
}else if(finalScore >= 90 && finalScore < 100) {
    grade = "A";    
}else if(finalScore >= 80 && finalScore < 90) {
    grade = "B";
}else if(finalScore >= 70 && finalScore < 80) {
    grade = "C";
}else if(finalScore >=60 && finalScore < 70) {
    grade = "D";
}else if(finalScore < 60) {
    grade = "F";
}


// --------------------
// 합격 / 불합격 판별
// --------------------
var status = finalScore >= 60 ? "Pass" : "Fail";


// --------------------
// 등급 메시지 결정
// --------------------
let message;

switch(grade) {
    case "S" : 
        message = "Super!!";
        break;
    case "A" : 
        message = "Ecellent work";
        break;
    case "B" : 
        message = "Good job!";
        break;
    case "C" : 
        message = "Satisfactory performance.";
        break;
    case "D" : 
        message = "Needs improvement.";
        break;
    case "F" : 
        message = "Please try harder!";
        break;
    default : alert("점수 입력에 오류가 있습니다.\n점수(1~100)를 재입력하세요.")
    break;
}


// --------------------
// 결과 출력 (alert)
// --------------------
alert(
    
   `
    Name: ${studentName}
    Grade: ${grade}
    Status: ${status}
    Message: ${message}`
);