console.log('helo1');

/* import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
 */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText, CustomEase)
  // gsap code here!
  
  gsap.to('.tags-overlay',
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
    })
 
    
   

  CustomEase.create("hop", ".8, 0, .3, 1")
  new SplitText(".tag", { type: "words,chars" });

  const splitTextElements = (
    selector,
    type = "words,chars",
    addFirstChar = false
   ) => {
    const elements = document.querySelector(selector);
    elements.forEach((element) => {
      const splitText = new SplitText(element, {
        type,
        wordClass: "word",
        charClass: "char",
      });

      if (type.includes("chars")) {
        splitText.chars.forEach((char,index) =>{
          const originalText = char.textContent;
          char.innerHTML = `<span${originalText}</span>`;

          if(addFirstChar && index === 0){
            char.classList.add("first-char");
          }
        })
      }
    })
  }
 });

 console.log('helo2');