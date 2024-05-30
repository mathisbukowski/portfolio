import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function Hero() {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <div className="text-white flex flex-col md:flex-row items-center justify-center min-h-screen">
            <MotionDiv
                initial={{x: -1000}}
                animate={{x: 0}}
                transition={{duration: 0.5, type: "spring", stiffness: 120}}
                className="md:w-1/2 w-full px-4 md:px-8 flex justify-center items-center mt-8 md:mt-0"
            >
                <div
                    className="flex flex-col justify-center items-center w-full max-w-md text-center bg-nightblue p-10 rounded-lg shadow-lg mx-auto">
                    <h1 className="text-3xl font-bold py-4">
                        Hi there ! 👋
                    </h1>
                    <p className="text-2xl">
                        I&apos;m Mathis, a technology enthusiast and developer. <br/>
                        I&apos;m currently living in Lille 🇫🇷 and studying at Epitech&ensp;
                        <span><img src="/logo-epi.png" alt="Epitech"
                                   className="inline-block w-5 h-5 align-middle ml-1"/></span>&ensp;!
                    </p>
                    <button
                        onClick={() => scrollToSection("works")}
                        className="bg-skyblue w-[200px] rounded-md font-extrabold my-6 py-3 text-textColor"
                    >
                        Continue !
                    </button>
                </div>
            </MotionDiv>
            <MotionDiv
                initial={{x: 1000}}
                animate={{x: 0}}
                transition={{duration: 0.5, type: "spring", stiffness: 120}}
                className="md:w-1/2 w-full px-4 md:px-8 flex justify-center items-center"
            >
                <img
                    src={"/hello.png"}
                    className="w-[370px] h-auto rounded-3xl transition-opacity duration-1000 ease-in-out"
                    alt="Mathis"
                />
            </MotionDiv>
        </div>
    );
}
