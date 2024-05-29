import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionDiv = motion.div;

const projects = [
    {
        title: "Railess",
        description: "An App to streamline your journeys.",
        technologies: ["React", "Node.js", "JavaScript", "TailwindCSS","MySQL", "Docker", "Git"],
        link: "https://railess.fr",
        logo: "/logorailess.png",
        color: "bg-skyblue",
    },
    {
        title: "Sam",
        description: "An App to see wildfire around the world. App made in 2 days",
        technologies: ["React", "Node.js", "MySQL", "Git", "JavaScript", "TailwindCSS"],
        link: "https://github.com/mathisbukowski/jam-03",
        logo: "/logosam.png",
        color: "bg-corail",
    },
    {
        title: "Corewar",
        description: "The goal of this, is to reproduice a fight between 2 to 4 champions in a memory.",
        technologies: ["C", "Git"],
        link: "https://github.com/mathisbukowski/corewar",
        logo: "/corewar.jpeg",
        color: "bg-anthracite"
    },
    {
        title: "Morpheus",
        description: "This project is a creation of VMs (Ubuntu Server & Arch/Debian DualBoot)",
        technologies: ["Arch Linux", "Debian", "Ubuntu", "Bash"],
        link: "https://github.com/mathisbukowski/",
        logo: "/archlinux-logo.svg",
        color: "bg-sky-gray"
    },
    {
        title: "MyRadar",
        description: "This project has been made to reproduice an air traffic control radar",
        technologies: ["C", "CSFML", "Git"],
        link: "https://github.com/mathisbukowski/",
        logo: "/myradar.jpg",
        color: "bg-mint"
    },
    {
        title: "EpyTODO",
        description: "This project has been made for discover the backend.",
        technologies: ["JavaScript", "Node.js", "Git", "MySQL"],
        link: "https://github.com/mathisbukowski/",
        logo: "/backend.jpeg",
        color: "bg-gold"
    }
];

const Icon = ({ name }) => {
    switch (name) {
        case 'React':
            return <img src="/react.svg" alt="React" className="w-[30px] h-[30px]" />;
        case 'Node.js':
            return <img src='/nodejs.svg' alt="Node.js"  className="w-[30px] h-[30px]" />;
        case 'JavaScript':
            return <img src="/js.svg" alt="JavaScript" className="w-[30px] h-[30px]" />;
        case 'MySQL':
            return <img src="/mysql.svg" alt="MySQL" className="w-[30px] h-[30px]" />
        case 'Typescript':
            return <img src="/ts.svg" alt="Typescript" className="w-[30px] h-[30px]" />
        case 'Ubuntu':
            return <img src="/ubuntu.svg" alt="Ubuntu" className="w-[30px] h-[30px]" />
        case 'Debian':
            return <img src="/debian.svg" alt="Debian" className="w-[30px] h-[30px]" />
        case 'Git':
            return <img src="/git.svg" alt="Git" className="w-[30px] h-[30px]" />
        case 'Docker':
            return <img src="/docker.svg" alt="Docker" className="w-[30px] h-[30px]" />
        case 'Arch Linux':
            return <img src="/arch.svg" alt="ArchLinux" className="w-[30px] h-[30px]" />
        case 'TailwindCSS':
            return <img src="/tailwind.svg" alt="TailwindCSS" className="w-[30px] h-[30px]" />
        case 'C':
            return <img src="/c.svg" alt="C" className="w-[30px] h-[30px]" />
        case 'Bash':
            return <img src="/bash.svg" alt="Bash" className="w-[30px] h-[30px]" />
        case 'CSFML':
            return <img src="/csfml.svg" alt="CSFML" className="w-[30px] h-[30px]" />
        default:
            return null;
    }
};

export default function Works() {
    return (
        <div className="text-white mt-40">
            <header className="bg-blue-night p-6 text-center">
                <h1 className="text-4xl font-bold">My Works</h1>
                <p className="text-xl mt-2">Here are some of my projects and achievements</p>
            </header>

            <section className="p-6">
                <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <MotionDiv
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`${project.color} p-6 rounded-lg shadow-lg flex items-center justify-between`}
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-lg mb-2">{project.description}</p>
                                <div className="flex space-x-4 mb-4">
                                    {project.technologies.map((tech) => (
                                        <Icon key={tech} name={tech}/>
                                    ))}
                                </div>
                                <button>
                                    <a href={project.link}> View Project </a>
                                </button>
                            </div>
                            <img
                                src={project.logo}
                                alt={`${project.title} logo`}
                                className="w-24 h-24 rounded-2xl"
                            />
                        </MotionDiv>

                    ))}
                </div>
            </section>
        </div>
    );
}
