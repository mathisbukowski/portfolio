

export default function Navbar() {
    return (
        <>
            <nav className="bg-blue-night p-4 fixed top-0 w-full z-50 bg-black opacity-90">
                <div className="container mx-auto flex justify-center">
                    <ul className="flex space-x-24 font-rubik font-extrabold text-2xl md:text-md">
                        <li><a href="#about" className="text-white hover:text-skyblue">About me</a></li>
                        <li><a href="#" className="text-white hover:text-skyblue">Works</a></li>
                        <li><a href="#" className="text-white hover:text-skyblue">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}