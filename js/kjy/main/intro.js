"use strict"

import { useIsMobile } from "../common/responsive.js";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);
    
if(!useIsMobile()){
    ScrollSmoother.create({
        smooth: 1,
    });
}

gsap.timeline()
.from('._main .intro .kr',{
    y : 50,
    opacity : 0,
    duration : 0.6,
},'a')
.from('._main .intro .en',{
    y : 50,
    opacity : 0,
    duration : 0.6,
},'a+=50%');



const split = new SplitText(".lang p", {type: "chars"});

gsap.timeline({
  delay : 0.5,
})
  .from(split.chars, {
  duration: .01,
  autoAlpha: 0,
  stagger: {
    each: .05,
    onStart() {
      /* let target = this.targets()[0];
      console.log(target.offsetLeft + target.offsetWidth) */
    }
  }
});