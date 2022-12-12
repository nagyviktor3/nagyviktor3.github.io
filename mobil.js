// const screenWidth = window.innerWidth;
// const div = document.querySelector("#login-container");
// const div2 = document.querySelector("#signup-link");
// // function checkScreenWidth()
// // const screenWidtwh = window.innerWidth;
// // const div = document.querySelector("#login-container");
// // const div2 = document.querySelector("#signup-link");

// if (screenWidth < 1000) {
//   div.style.paddingBottom = "1000" + "px";
//   div2.style.border = "4px solid black";
// }

window.onscroll = function() {
    window.scrollTo(0, 0);
  }
console.log("================================");
let element = document.getElementById('my-element');
// element.className = 'body';

// Set the color of the element to red
// document.body.style.zoom = 1;
// Call the checkScreenWidth function when the page loads
// window.addEventListener("load", checkScreenWidth);
window.onload = function() {
    var browserWidth = document.body.clientWidth;
    var browserHeight = document.body.clientHeight;
    if(browserWidth < 1000) {
        document.getElementById('signup-link').style.marginBottom = (browserHeight-211)+'px';
        document.body.style.zoom = 1;
    }
};
