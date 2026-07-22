const tl = gsap.timeline();

tl.from(".hero-title",{
  x: 2000,
  duration: 2,
  opacity:0,
  ease:"power4.out",
})
.from(".item-1", {
  height:0,
  duration: .5,
  ease:"power3.out",
})
tl
.from (".item-2", {
  /* height: 0, */
  y: 1000,
  opacity: 0,
  duration: .5,
  ease:"power3.out",
})
.from(".item-3", {
  height:0,
  opacity: 0,
  duration: .5,
  ease:"power3.out",
})
.from(".item-4", {
  y: 1000,
  opacity: 0,
  ease:"power3.out",
})
.from(".item-5", {
  height:0,
  duration: .5,
  opacity: 0,
  ease:"power3.out",
})
.from(".item-6", {
  y: 1000,
  opacity: 0,
  ease:"power3.out",
})
.from(".item-7", {
  height:0,
  duration: .5,
  opacity: 0,
  ease:"power3.out",
})
.from(".item-8", {
  y: 1000,
  opacity: 0,
  ease:"power3.out",
})
.from(".item-9", {
  height:0,
  duration: .5,
  opacity: 0,
  ease:"power3.out",
})
.from(".item-10", {
  y: 1000,
  opacity: 0,
  ease:"power3.out",
}).to(".hero-title",{
  opacity:0,
  y: -1000,
  duration: 1.5,
  ease:"power2.out",
}).to(".hero-container",{
  x: 1300,
  opacity:0,
  duration:2,
  ease:"power3.out"
}).from(".nav-bar",{
  y: -200,
  opacity:0,
  duration:2,
  ease:"power3.out"
})