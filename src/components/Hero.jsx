import { heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constant";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";



const Hero = () => {
    const parallaxRef = useRef(null);
    return (
    <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
    >
        <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6 ">
            May the Force be with you {` `}
            <span className="inline-block relative">
                Created by @wakeupkstnv
                {/* <img src="https://seeklogo.com/images/S/Star_Wars-logo-371C196CE6-seeklogo.com.png" className="absolute top-full left-0 w-full
                xl:-mt-0.5" width={600} height={100} alt="Curve"/> */}
            </span>
            </h1>

            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            In the vast cosmos, Star Wars weaves a timeless tale of light versus dark, heroism, and sacrifice, inspiring generations to reach for the stars.
            </p>

            <Button href="/planets" white>
            Let Him Cook
            </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
            </div>
            <div className="aspect-[33/40] rounded-b-[0.7rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                src="https://cdna.artstation.com/p/marketplace/presentation_assets/003/175/422/large/file.jpg?1699563563"
                className="w-full scale-[1.7] translate-y-[15%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                width={1024}
                height={490}
                alt="AI"
                />
                <ScrollParallax isAbsolutelyPositioned>
                <img src="https://www.pngall.com/wp-content/uploads/14/Death-Star.png" className="scale-[0.7] translate-y-[-3%] translate-x-[-65%] "/>
                </ScrollParallax>
                
                <ScrollParallax isAbsolutelyPositioned>
                <img src="https://www.pngall.com/wp-content/uploads/2016/03/Star-Wars-Ship-PNG.png" className="scale-[0.8] translate-y-[-35%] translate-x-[90%] "/>
                </ScrollParallax>
            </div>
            </div>
            <div className="absolute -top-[54%] left-1/2 w-[248%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] rounded-3xl opacity-85 transition hover:opacity-100">
            <img src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="bg"/>
            </div>
            <BackgroundCircles />
        </div>
        </div>
    </Section>
    );
};

export default Hero;
