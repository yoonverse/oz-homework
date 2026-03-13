// AI 도움을 받았으며, 복습 및 재검토 필요함.

const STAR = "*";

let starNum;

while (true) {
    starNum = Number(prompt("Enter the number of stars (1-10)"));

    if(!isNaN(starNum) && starNum >= 1 && starNum <= 10) {
        break;
    }
    console.log("Invalid input! Enter a number between 1 and 10.");
}

var result = "";

function printStars(count = 1) {
    for(let i = 0; i < count; i++) {
    result += STAR;
    }   
    console.log(result);
}

printStars(starNum);