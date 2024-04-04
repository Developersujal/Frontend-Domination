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
        scroller:"body",
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
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:true
    }
})