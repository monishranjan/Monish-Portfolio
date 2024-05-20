// Send Email
function sendEMail() {
    window.location = "mailto:monishranjan9@gmail.com";
}
// ====================================

// Custom Loader
var tl = gsap.timeline()

tl.from("#custom_loader h1", {
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1,
})

tl.to("#custom_loader h1", {
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1,
})
tl.to("#custom_loader", {
    opacity:0,
})
t.to("#custom_loader", {
    display:"none"
})
// ====================================

// Starting the Functions