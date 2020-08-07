let counterButton = document.getElementById("counter");
let pauseButton = document.getElementById("pause");
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let heartButton = document.getElementById("heart");
let commentButton = document.getElementById("comment-form");


let go = true;
let count = 0;

document.addEventListener("DOMContentLoaded", function(){
    let counting = setInterval(function(){
        if(go){
            counterButton.innerHTML = count;
            count +=1;
        };
    }, 1000);
});

pauseButton.addEventListener("click", function(){
    if(go){
        pauseButton.innerHTML = "resume"
        go = false
    } else {
        pauseButton.innerHTML = "pause"
        go = true
    }
});

plusButton.addEventListener("click", function() {
    count++;
});

minusButton.addEventListener("click", function() {
    count--;
});

heartButton.addEventListener("click",function(){
    let likeList = document.querySelector(".likes");
    let li = document.createElement("li")
    li.innerHTML = `${count} has been liked!`;
    likeList.appendChild(li);
});

commentButton.addEventListener("submit", function(event){
    event.preventDefault()
    let input = document.getElementById("comment-input").value;
    let comments = document.getElementById("list");
    comments.innerHTML += input;
});