"use strict"

import { useIsMobile } from "../common/responsive.js";
import mob from "./mob/mob.js";
import pc from "./pc/pc.js";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
    
if(!useIsMobile()){
    ScrollSmoother.create({
        smooth: 1,
    });
}

pc();
mob();