var crsr  = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
});

// var load = document.querySelector("#loader");

// window.addEventListener("load",function () {
//     load.style.display = "none";
// })