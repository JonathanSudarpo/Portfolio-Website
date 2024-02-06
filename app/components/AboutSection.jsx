"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton'

// INFORMATION FOR 'SKILLS' "EDUCATION" AND "EXPERIENCE" TAB
const TAB_DATA = [{

    title: "Skills", 
    id: "skills",
    content: (
        <ul className='list-disc pl-2'>
            <li> Java</li>
            <li> C++ </li>
            <li> Python</li>
            <li> JavaScript </li>
            <li> Racket </li>
            <li> x86 Assembly </li>
            <li> Git </li>
        </ul>
    )

}, 
{

    title: "Education", 
    id: "education",
    content: (
        <ul className='list-disc pl-2'>
            <li> Northeastern University B.S. Computer Science</li>
            <li> Telkom University Certification </li>
        </ul>
    )

}, 

{

    title: "Experience", 
    id: "experience",
    content: (
        <ul className='list-disc pl-2'>
            <li> Telkomsel Data Engineer Intern | August - December 2023</li>
            <li> P.T. Firman Utama Cemerlang QA | June - September 2022 </li>
            <li> Beemarket.id Software Intern | September 2020 - June 2021 </li>
        </ul>
    )

},

]
const AboutSection = () => {
    const[tab, setTab] = useState("skills")
    const[isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition (() => {
            setTab(id);
        }) 
    }

    return (
        <section className="text-white scroll-mt-16" id="about">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/aboutme.png" width={500} height={500} alt="About Me"/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-base lg:text-lg">
              I am a dedicated student at Northeastern University, working toward a B.S. 
              in Computer Science with a concentration in Artificial Intelligence and Machine Learning. 
              My technical experience is grounded in programming languages like Java, C++, C, Python, 
              and tools such as Racket and Git. I pride myself on my analytical thinking, problem-solving 
              skills, and my ability to adapt to new challenges in the ever-evolving tech landscape.
              </p>
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  {" "}
                  Skills{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  {" "}
                  Education{" "}
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("experience")}
                  active={tab === "experience"}
                >
                  {" "}
                  Experience{" "}
                </TabButton>
              </div>
              <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </div>
        </section>
      );
    };
export default AboutSection