

export default function Navbar() {
    return (
        <>
            <nav className="bg-blue-night p-4 fixed top-0 w-full z-50 bg-black opacity-90">
                <div className="container mx-auto flex justify-center md:justify-center items-center">
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24 font-rubik font-extrabold text-lg md:text-2xl">
                        <li><a href="#about" className="text-white hover:text-skyblue">About me</a></li>
                        <li><a href="#" className="text-white hover:text-skyblue">Works</a></li>
                        <li><a href="#" className="text-white hover:text-skyblue">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}