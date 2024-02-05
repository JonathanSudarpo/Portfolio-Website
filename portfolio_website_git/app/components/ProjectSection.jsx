
"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "Agile Task Manager",
    description: "A C++ text-based project management tool with user profiles, role-based access, and project card management. Features command-line interface output/input management using the iomanip library.",
    image: "/images/AgilePic.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JonathanSudarpo/Agile-Task-Manager",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Image Processor",
    description: "Java-based image processing application featuring a Swing GUI. Includes seven advanced operations like filters and color transformations. Utilizes Java IO and AWT for pixel manipulation in BufferedImage objects.",
    image: "/images/imageprocessor.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JonathanSudarpo/Object-Oriented-Design/tree/main/Imageine%20Image%20Processor",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Marble Solitaire",
    description: "Implemented three variants of Marble Solitaire in Java with different board designs and rules. Applied MVC architecture for clean separation of concerns and a robust command-line interface for game interactions.",
    image: "/images/Solitaire.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JonathanSudarpo/Object-Oriented-Design/tree/main/Marble%20Solitaire",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Natural Language Query for Telkomsel",
    description: "Developed and deployed an AI-driven chatbot in Python, utilizing a proprietay AI model and StreamLit for web integration, allowing Telkomsel's management to query the company database using natural language. This system streamlines data access beyond traditional SQL, enhancing decision-making efficiency.",
    image: "/images/streamlit.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/JonathanSudarpo/NLQ_Telkomsel/tree/main/genai_ndmJ",
    previewUrl: "/",  },
  {
    id: 5,
    title: "Data Visualization Map for Telkomsel",
    description: "Utilized Folium with Python to create an interactive map visualizing Telkomsel's data. This tool provides insightful geographic representations of datasets, enhancing data accessibility and strategic decision-making.",
    image: "/images/map.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JonathanSudarpo/NLQ_Telkomsel/tree/main/geospy",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "React Portfolio",
    description: "Crafted a sleek and responsive personal portfolio using React, showcasing a modern design with interactive elements. This project involved strategic use of JavaScript to enhance user experience and exhibit my professional and academic accomplishments.",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y:0, opacity: 1},

  }
  
  return (
    <section id = "projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              // previewUrl={project.previewUrl}
            />
          </motion.li>  ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;