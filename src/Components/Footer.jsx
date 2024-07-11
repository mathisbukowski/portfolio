import {
    FaFileDownload,
    FaGithubSquare,
    FaLinkedin, FaTwitterSquare
} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col items-center justify-center text-gray-300">
            <div className="mb-8">
                <img src="/nothere.png" className="w-[150px] h-[150px]" alt={"Not there :)"}/>
            </div>
            <h2 className="font-kode font-bold">Here you will find all the information to reach me !</h2>
            <div className="flex justify-center mt-4 w-full">
                <div className="flex justify-center w-full sm:w-[75%] my-4">
                    <a href="https://github.com/mathisbukowski" target={"_blank"}>
                        <FaGithubSquare size={30} className="my-[12px] mx-2 sm:mr-4" color="#FFA661"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mathisbukowski/" target={"_blank"}>
                        <FaLinkedin size={30} className="my-[12px] mx-2 sm:mr-4" color="#FFA661"/>
                    </a>
                    <a href="https://x.com/mathisbkwk" target={"_blank"}>
                        <FaTwitterSquare size={30} className="my-[12px] mx-2 sm:mr-4" color="#FFA661"/>
                    </a>
                    <a href="/mathisbukowski_cv.pdf" target={"_blank"}>
                        <FaFileDownload size={30} className="my-[12px] mx-2 sm:mr-4" color="#FFA661"/>
                    </a>
                </div>
            </div>
            <p className="text-center">
                Made with <span role="img" aria-label="love">❤️</span> by mathis.
            </p>
            <p className="mt-10 text-center">
                <a href="https://mathisbukowski.fr" className="text-corail">mathisbukowski</a> © 2024 by
                <a href="https://x.com/mathisbkwk" className="text-corail"> Mathis Bukowski</a>
            </p>
        </div>

    );
}