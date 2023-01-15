// const buttonEl = document.getElementById('button');
// const output = document.getElementById('output');
// const comment = document.getElementById('comment');

// buttonEl = addEventListener('click', checkSpam);

// function checkSpam() {
//     let message = comment.value;
//     message = message.toLowerCase()
//     if (message.includes('viagra')){
//         message = message.replace('viagra', '*****')
//         output.innerHTML = message;
//         comment.value = '';
//     } else if (message.includes('xxx')){
//         message = message.replace('xxx', '***')
//         output.innerHTML = message;
//         comment.value = '';
//     } else {
//         output.innerHTML = comment.value;
//         comment.value = '';
//     }
// }

document.addEventListener("DOMContentLoaded", function(event){
    let name = localStorage.getItem('name');
    if (name!= null){
        document.getElementById("author").value = name;
    }
});

function sendMessage (author, comment) {
    document.getElementById("chat").innerHTML += `<span class= 'author'>${author}:</span><span>${comment}:</span><br>`;
}
function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;

    if (localStorage.getItem('name') ==null){
        localStorage.setItem('name', author);
    }

    sendMessage(author, comment);
}

window.onbeforeunload = function () {
    localStorage.setItem('comment-save', document.getElementById('comment').value);
}
window.onload = function () {
    document.getElementById('comment').value = localStorage.getItem('comment-save');
}