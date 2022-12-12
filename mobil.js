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

console.log("================================");

// Call the checkScreenWidth function when the page loads
// window.addEventListener("load", checkScreenWidth);
window.onload = function() {
    var browserWidth = document.body.clientWidth;
    if(browserWidth < 1000) {
        document.getElementById('signup-link').style.paddingBottom = '1100px';
    }
};
