var tl = gsap.timeline();

function navanime() {
var btn = document.querySelector("#btn2");

btn.addEventListener("mouseenter",function(){
    gsap.to(btn,{
        backgroundColor:"#97C680",
        color:"black",
        fontWeight: 600
    })
})
btn.addEventListener("mouseleave",function(){
    gsap.to(btn,{
        backgroundColor:"black",
        color:"white",
    })
})
}

function imageSlide() {
    var left = document.querySelectorAll("#imgs");

left.forEach(element => {
    element.addEventListener("mouseenter",()=>{
        // element.style.width = "50%";
        gsap.to(element,{
            width:"50%"
        })
    })
    element.addEventListener("mouseleave",()=>{
        // element.style.width = "20%";
        gsap.to(element,{
            width:"20%"
        })
    })
});
}
tl.from("nav",{
    y:-20,
    duration:1,
    opacity:0,
})
tl.from(".page1-content",{
    x:-600,
    duration:1.2,
    opacity:0,
})

function inphover(){
    var inp = document.querySelector(".input");
    inp.addEventListener("mouseenter",()=>{
        gsap.to(inp,{
            boxShadow:"7px 7px 10px grey"
        })    
    })
    inp.addEventListener("mouseleave",()=>{
        gsap.to(inp,{
            boxShadow:"5px 5px 10px white"
        })    
    })
}


// gsap.from(".page3 h1",{
//     y:20,
//     opacity:0,
//     stagger:0.3,
//     scrollTrigger:{
//         trigger:".page3",
//         scroller:"#main",
//         // markers:true,
//         start:"top 50%",
//         end:"top -10%",
//         scrub:true
//     }
// })
navanime();
imageSlide();
inphover();