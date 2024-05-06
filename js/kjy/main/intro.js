"use strict"

import { useIsMobile } from "../common/responsive.js";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
    
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
},'a+=50%')

gsap.from('.lang p',{
    y : 50,
    opacity : 0,
    duration : 0.6,
});