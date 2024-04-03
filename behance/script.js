var tl = gsap.timeline();

tl.from("nav h1",{
    y:-50,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.2,
})

tl.from(".content",{
    x:-600,
    opacity:0,
    duration:1,
})
tl.from("img",{
    x:-600,
    opacity:0,
    duration:1.2,
    rotate:360,
    stagger:0.3
})

tl.from(".page1-footer h1",{
    x:-60,
    opacity:0,
    duration:1,
    stagger:0.2,
})