const questionDiv = document.getElementsByClassName('question-div');
const plusImg = document.getElementsByClassName('imgs');
const answers = document.getElementsByClassName('answers');
let isClicked = true;


for (let i=0; i<questionDiv.length; i++) {

    questionDiv[i].addEventListener('click', function() {
    if (isClicked) {
        answers[i].style.display = "block";
        plusImg[i].setAttribute("src", "assets/images/icon-minus.svg");
        questionDiv[i].style.borderTop = "none";
        isClicked = false;
    } else {
        answers[i].style.display = "none";
        plusImg[i].setAttribute("src", "assets/images/icon-plus.svg")
        questionDiv[i].style.borderTop = "1px solid hsl(275, 100%, 97%)";
        isClicked = true;
    }
});
}
