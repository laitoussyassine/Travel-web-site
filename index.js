let count = 0
let count2 = 0
let count3 = 0
const elem = document.getElementById('clockdiv')
const elem2 = document.getElementById('clockdiv2')
const elem3 = document.getElementById('clockdiv3')
 
let interval = setInterval(() => {
    count++
    
    elem.innerText = '+' + count + "k"

    if(count === 30) {
        clearInterval(interval)
    } 
    
}, 50);


let interval2 = setInterval(() => {
    count2++
    elem2.innerText = '+' + count2 
    if(count2 === 7) {
        clearInterval(interval2)
    }
}, 150);

let interval3 = setInterval(() => {
    count3++
    elem3.innerText = '+' + count3 
    if(count3 === 10) {
        clearInterval(interval3)
    }
}, 100);



const header = document.querySelector(".content_header");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    header.classList.add("content_header--scrolled");
  } else {
    header.classList.remove("content_header--scrolled");
  }
});