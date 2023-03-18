//Первое задание
// let counter = document.getElementById("pon");
// let incrementButton = document.getElementById("increment");
// let decrementButton = document.getElementById("decrement");
//
// incrementButton.addEventListener("click", function() {
//     let value = parseInt(counter.textContent);
//     if (value < 0) {
//         return;
//     }
//     value += 1;
//     counter.textContent = value;
//     counter.classList.remove("red");
//     counter.classList.add("green");
// });
//
// decrementButton.addEventListener("click", function() {
//     let value = parseInt(counter.textContent);
//     if (value <= 0) {
//         return;
//     }
//     value -= 1;
//     counter.textContent = value;
//     counter.classList.remove("green");
//     counter.classList.add("red");
// })


// Второе задание
// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
//
// const coordinates = document.getElementsByClassName('coordinates')
// // coordinate.addEventListener('mousemove', event)
// window.addEventListener('mousemove',(event) => {
//     posX.innerHTML = event.x
//     posY.innerHTML = event.y
// })




//Третье задание
// function clickme() {
//     let color = prompt("Введите цвет (Red, Yellow or Green):");
//
//     if (color === "Red") {
//         document.querySelector(".red").style.backgroundColor = "red";
//         document.querySelector(".yellow").style.backgroundColor = "gray";
//         document.querySelector(".green").style.backgroundColor = "gray";
//         document.querySelector(".red").textContent = "STOP";
//         document.querySelector(".yellow").textContent = "";
//         document.querySelector(".green").textContent = "";
//     } else if (color === "Yellow") {
//         document.querySelector(".red").style.backgroundColor = "gray";
//         document.querySelector(".yellow").style.backgroundColor = "yellow";
//         document.querySelector(".green").style.backgroundColor = "gray";
//         document.querySelector(".red").textContent = "";
//         document.querySelector(".yellow").textContent = "SLOW";
//         document.querySelector(".green").textContent = "";
//     } else if (color === "Green") {
//         document.querySelector(".red").style.backgroundColor = "gray";
//         document.querySelector(".yellow").style.backgroundColor = "gray";
//         document.querySelector(".green").style.backgroundColor = "green";
//         document.querySelector(".red").textContent = "";
//         document.querySelector(".yellow").textContent = "";
//         document.querySelector(".green").textContent = "GO";
//     } else {
//         alert("Такого цвета нету");
//     }
// }
