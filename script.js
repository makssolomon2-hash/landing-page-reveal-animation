console.log('helo1');

/* import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
 */
document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap) return;
  // gsap code here!
  
  /* gsap.to('.tags-overlay',
    { 
      delay:0,
      duration: 4, 
      opacity: 0, 
      y: 2000,
      ease: "power2.inOut",
    });

  gsap.to('.preloader',
    { 
      duration: 2,
      delay:1, 
      opacity: 1, 
      y: -2000,
      ease: "power1.inOut",
    });
  
  gsap.to('.split-overlay',
    { 
      duration: 2,
      delay:2, 
      opacity: 1, 
      x: -4000,
      ease: "power2.inOut",
    });

  gsap.fromTo(".container", {
      delay: 2.5,
      clipPath: "polygon(0% 48%, 0 48%, 0 52%, 0% 52%)",
      duration: 1.5,
      ease: "power4.inOut",
    },{
      delay: 3,
      clipPath: "polygon(100% 48%, 0 48%, 0 52%, 100% 52%)",
    }) */
 
    
  const splitTextElements = (
    selector,
    type = "words,chars",
    addFirstChar = false
   ) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (type.includes("chars")) {
        element.innerHTML = [...element.textContent].map((char, index) =>
          char === " " ? " " : `<span class="char${addFirstChar && index === 0 ? " first-char" : ""}"><span>${char}</span></span>`
        ).join("");
      } else {
        element.innerHTML = element.textContent.split(" ").map((word) =>
          `<span class="word">${word}</span>`
        ).join(" ");
      }
    })
  }

  splitTextElements(".intro-title h1", "words,chars", true);
  splitTextElements(".outro-title h1");
  splitTextElements(".tag p", "words");
  splitTextElements(".card h1", "words,chars", true);
 
  const isMobile = window.innerWidth <= 1000;

  gsap.set(
    [
      ".split-overlay .intro-title .first-char span",
      ".outro-title .char span",
    ],
    { y: "0%" }
  );

  gsap.set(".split-overlay .intro-title .first-char", {
    x: isMobile ? "7.5rem" : "18rem",
    y: isMobile ? "-1rem" : "2.75rem",
    fontWeight: "900",
    scale: 0.75,
  });

  if (document.querySelector(".outro-title .char")) {
    gsap.set(".outro-title .char", {
      x: isMobile ? "-3rem" : "-8rem",
      fontSize: isMobile ? "6rem" : "14rem",
      fontWeight: "500"
    });
  }

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  const tags = gsap.utils.toArray(".tag");
  gsap.set(".tag .word", { y: "-100%" });

  /* gsap.to(".preloader",{
    x:1000,
    duration:3,
    opacity:0
  }) */

  tags.forEach((tag, index) => {
    const words = tag.querySelectorAll("p .word");
    if (words.length) {
      tl.to(
        words,
        {
          y: "0%",
          duration: 0.75,
        },
        0.5 + index * 0.1
      );
    }
  })

  tl.to(
    "body > .preloader .intro-title .char span",
    {
      y: "0%",
      duration: 0.75,
      stagger: 0.05,
    },
    0.5
  );
});

/*  const splitTextElements = (
    selector,
    type = "words,chars",
    addFirstChar = false
 ) => {
  const elements = document.querySelectorAll(selector);  
  console.log(elements);
  

  elements.forEach((element) => {
    console.log(element);
    const splitText = new SplitText(element,{
      type:"words,chars"
    });
    console.log(splitText);
    console.log(splitText.chars);
  });

  splitText.chars.forEach((char)=>{
    console.log(char);
    console.log(char.textContent);
    const originalText = char.textContent;
    char.inerHTML = `<span>${originalText}</span>`;

    if(addFirstChar && index === 0){
      char.classList.add("first-char")
    }
  })
 };

splitTextElements(".intro-title"); */

 console.log('helo2');
