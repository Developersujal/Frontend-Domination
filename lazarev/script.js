 var hoverCard = document.querySelectorAll(".hover-card");
 var img = document.querySelectorAll("#hoverimg");
 var link = document.querySelector("#video-link");
 var capsule = document.querySelector(".capsule");
var cimg = document.querySelector("#video-cover");
var vdo = document.querySelector("#hidden-video");





function hoverCardfunc() {
    hoverCard.forEach(function(elem){

        elem.addEventListener("mouseenter" , function () {
           gsap.to(elem.childNodes[5],{
               opacity:1,
               scale:1
           })
        });
       
       
        elem.addEventListener("mouseleave" , function () {
           gsap.to(elem.childNodes[5],{
               opacity:0,
               scale:0
           })
        })
       
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[5],{
             x:dets.x - elem.getBoundingClientRect().x,  
             y:dets.y - elem.getBoundingClientRect().y -80 
            })
           // console.log(dets)
        })
       
       });
}

function showReel() {
    link.addEventListener("mouseenter",function(){
        gsap.to(capsule,{
            opacity:1,
            scale:1
        })
    });
    
    link.addEventListener("mouseleave",function(){
        gsap.to(capsule,{
            opacity:0,
            scale:0
        })
    })
}

function fullScreenVideo() {
    var a = document.querySelector(".page3 a");
var vdo1 = document.querySelector(".page3 video");

a.addEventListener("click",function(event){
    event.preventDefault();
    vdo1.play();
    gsap.to(vdo1,{
        opacity:1,
        scale:1,
        zIndex:9999
    })
})
vdo1.addEventListener("click",function(){
    vdo1.pause();
    gsap.to(vdo1,{
        opacity:0,
        scale:0,
        zIndex:0
    })
})
}


function pikaAi() {
    cimg.addEventListener("mouseenter",function(){
        gsap.to(cimg,{
            opacity:0
        })
        gsap.to(vdo,{
            opacity:1
        })
        vdo.play();
        vdo.playbackRate = 2;
        vdo.loop = true;
    })
    cimg.addEventListener("mouseleave",function(){
        gsap.to(cimg,{
            opacity:1
    
        })
        gsap.to(vdo,{
            opacity:0
        })
        vdo.pause();
        vdo.load();
    })
}

function page7vdo() {
var sections = document.querySelectorAll(".sec-right")
sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})

}
function heightVdo() {
var heightvdo = document.querySelectorAll("#height-vdo");
var p =document.querySelectorAll("#p");
var video;
heightvdo.forEach(video => {
    video.addEventListener("mouseenter",function () {
        video.play();
        gsap.to(video,{
            height:"70vh",                
        })
    })

    video.addEventListener("mouseleave",function () {
        video.pause();
        video.load();
        gsap.to(video,{
            height:"50vh",                
        })
    })
});
}


heightVdo();
page7vdo();
// pikaAi();
showReel();
hoverCardfunc();
fullScreenVideo();