import { motion } from 'framer-motion';

const MotionDiv = motion.div;

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
        case 'Github Actions':
            return <img src="/actions.svg" alt="Github Actions" className="w-[30px] h-[30px]"/>
        case 'Postman':
            return <img src="/postman.svg" alt="Postman" className="w-[30px] h-[30px]"/>
        case 'JetBrains IDE':
            return <img src="/jetbrains.svg" alt="JetBrains" className="w-[30px] h-[30px]"/>
        default:
            return null;
    }
};

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ level }) => {
    const fullStars = Math.floor(level / 20);
    const halfStar = (level % 20) >= 10;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {Array(fullStars).fill().map((_, i) => (
                <MotionDiv
                    key={`full-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                    <FaStar className="text-yellow-500" />
                </MotionDiv>
            ))}
            {halfStar && (
                <MotionDiv
                    key="half"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: fullStars * 0.1 }}
                >
                    <FaStarHalfAlt className="text-yellow-500" />
                </MotionDiv>
            )}
            {Array(emptyStars).fill().map((_, i) => (
                <MotionDiv
                    key={`empty-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: (fullStars + (halfStar ? 1 : 0) + i) * 0.1 }}
                >
                    <FaRegStar className="text-yellow-500" />
                </MotionDiv>
            ))}
        </div>
    );
};

import skills from "../skills.json";

export default function Skills() {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-bold mb-6 text-center text-white">Skills</h2>
            <p className="text-xl mt-2 text-white text-center mb-12">Here are some of the skills I&apos;ve gained with my projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <MotionDiv
                        key={index}
                        className="bg-anthracite p-6 rounded-lg shadow-lg"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-white">{skill.category}</h3>
                        <ul className="list-none">
                            {skill.technologies.map((tech, idx) => (
                                <li key={idx} className="mb-2">
                                    <div className="flex justify-between mb-1">
                                        <Icon key={tech.name} name={tech.name}/>
                                        <span className="text-lg text-black font-bold">{tech.name}</span>
                                    </div>
                                        <StarRating level={tech.level} />
                                </li>
                            ))}
                        </ul>
                    </MotionDiv>
                ))}
            </div>
        </div>
    );
};
