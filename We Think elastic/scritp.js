gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl = gsap.timeline();
tl.from(".nav-right svg",{
    x:300,
    y:200,
    duration:1,
    scale:3,
    rotate:360
})
tl.from(".nav-left p",{
    y:-50,
    duration:1,
    stagger:0.1,
})
tl.from(".hello h1",{
    x:-400,
    opacity:0,
    duration:1,
})
gsap.to(".page2 video",{
    width:"95%",
    scrollTrigger:{
        trigger:".page2",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 0%",
        scrub:4,   
    }
})
gsap.from(".page3 h1",{
    y:20,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".page3",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:true
    }
})
gsap.to(".page5 h1",{
    transform: "translatex(-150%)",
    scrollTrigger:{
        trigger:".page5",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})

var vdo = document.querySelector(".page4 video");
var hoverbtn = document.querySelector("#moving-button");
var p4 = document.querySelector(".page4");
vdo.addEventListener("mouseenter",function(){
    vdo.play();
    // vdo.style.cursor = "none";
    hoverbtn.style.opacity = 1; 
})
vdo.addEventListener("mouseleave",function(){
    vdo.pause();
    vdo.load();
    hoverbtn.style.opacity = 0;

})


// vdo.addEventListener("mousemove",function(dets){
//     hoverbtn.style.left = dets.x-"px";
//     hoverbtn.style.top = dets.y-"px";
// })
document.querySelector(".elem").addEventListener("mouseenter",function(){
    document.querySelector(".elem").style.border= "1px solid white";
    document.querySelector(".elem").style.borderRadius= "20px";
    document.querySelector(".elem").style.padding= "2vh";
    document.querySelector(".elem").style.marginTop= "1vh";
})
document.querySelector(".elem").addEventListener("mouseleave",function(){
    document.querySelector(".elem").style.border= "none";
    // document.querySelector(".elem").style.borderRadius= "10px";
    document.querySelector(".elem").style.marginTop= "0vh";

})
