"use strict";

const form = document.querySelector('form');
const div = document.querySelector('.messages');
const btn = document.querySelector('.btn');
const userName = document.querySelector('.userName');
const comment = document.querySelector('.comment');
const img = document.querySelector('.img');

const message = {
    img: img,
    name: userName,
    comment: comment
}

localStorage.setItem("message", JSON.stringify(message));
function readUser() {
    const messageJSON = localStorage.getItem("message")

    if (messageJSON === null) {
    return undefined;
    }
}


btn.addEventListener('click', function(evt){
    evt.preventDefault();

    const p = document.createElement('p');
    p.className = 'message';
    p.innerHTML = `<img width="40px" hight="auto" src="${img.value}">  ${userName.value} : ${comment.value}`;
    
    div.appendChild(p);

    comment.value = '';
})






















// document.addEventListener("DOMContentLoaded", function(evt){
//     let userName = localStorage.getItem('userName');
//     let img = localStorage.getItem('img');
//     if (userName != null && img != null){
//         document.querySelector('.userName').value = userName;
//         document.querySelector('.img').value = img;
//     }
// })

// let btn = document.querySelector('.btn');


// function sendMessage(img, userName, comment){
//     document.querySelector("img").innerHTML = `src=""` 
//     document.querySelector(".messages").innerHTML += `<span>${userName} : </span><span>${comment}</span></br>`; 
// }

// btn.addEventListener('click', function(evt){
//     let userName = document.querySelector('.userName').value;
// let comment = document.querySelector('.comment').value;
// let img = document.querySelector('.img').value;

//     if (localStorage.getItem ('.userName') === null) {
//         localStorage.setItem('userName', userName);
//     }
//     if (localStorage.getItem('.img') === null){
//         localStorage.setItem('img', img);
//     }
//     sendMessage(img, userName, comment);
    
// });



