import React from 'react'
import Section from '../components/Section'
import { GradientLight } from "../components/design/Benefits";
import { BackgroundCircles } from '../components/design/Header';
import { heroBackground, robot } from "../assets";
import { BottomLine } from '../components/design/Hero';

const StarAi = () => {
  return (
    <Section>
        <div className="absolute -top-[54%] left-1/2 w-[248%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] rounded-3xl opacity-25">
            <img src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="bg"/>
        </div>
          <BackgroundCircles />
          <BottomLine />
    </Section>
  )
}

export default StarAi
