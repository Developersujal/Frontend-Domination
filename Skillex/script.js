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
navanime();