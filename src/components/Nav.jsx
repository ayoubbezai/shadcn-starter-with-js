import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // Import search icon
import "@fontsource/montez"; // Montez for logo
import "@fontsource/montserrat"; // Montserrat for navigation

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Scroll function using pixel values
    const scrollToPosition = (position) => {
        window.scrollTo({
            top: position, // Scroll to the specified number of pixels from the top
            behavior: "smooth" // Smooth scrolling
        });
    };

    return (
        <nav className="w-full top-0 left-0 bg-[#99582A] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo (Left) */}
                    <div className="text-xl font-bold text-white" style={{ fontFamily: "Montez, cursive" }}>
                        Leather Brothers
                    </div>

                    {/* Desktop Menu (Centered) */}
                    <div className="hidden md:flex md:flex-row-reverse space-x-6 text-[17px] font-medium absolute left-1/2 transform -translate-x-1/2 md:font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        <Link
                            className="text-white font-bold relative text-[18px] ml-4"
                            onClick={() => scrollToPosition(0)} // Scroll to 500px from the top
                        >
                            الرئيسية
                            <span className="absolute w-4 h-4 top-6 left-4 bg-white rounded-t-full mx-auto mt-1"></span>
                        </Link>
                        <Link
                            className="text-white hover:text-gray-200"
                            onClick={() => scrollToPosition(700)} // Scroll to 1000px from the top
                        >
                            حولنا
                        </Link>
                        <Link
                            className="text-white hover:text-gray-200"
                            onClick={() => scrollToPosition(4400)} // Scroll to 1500px from the top
                        >
                            الاخبار
                        </Link>
                        <Link
                            className="text-white hover:text-gray-200"
                            onClick={() => scrollToPosition(1800)} // Scroll to 2000px from the top
                        >
                            المنتجات
                        </Link>
                        <Link
                            className="text-white hover:text-gray-200"
                            onClick={() => scrollToPosition(5500)} // Scroll to 2500px from the top
                        >
                            اتصل بنا
                        </Link>
                    </div>

                    {/* Right Side: Search Icon */}
                    <div className="flex items-center space-x-4">
                        <FiSearch className="text-white w-5 h-5 cursor-pointer hover:text-gray-200" />

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)} // Toggle menu on click
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#99582A] shadow-md absolute top-16 z-50 left-0 w-full text-base flex flex-col text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <Link
                        className="block px-4 py-2 text-white font-bold relative"
                        onClick={() => scrollToPosition(0)} // Scroll to 500px from the top
                    >
                        الرئيسية
                    </Link>
                    <Link
                        className="block px-4 py-2 text-white hover:bg-[#7A4622]"
                        onClick={() => scrollToPosition(700)} // Scroll to 1000px from the top
                    >
                        حولنا
                    </Link>
                    <Link
                        className="block px-4 py-2 text-white hover:bg-[#7A4622]"
                        onClick={() => scrollToPosition(4400)} // Scroll to 1500px from the top
                    >
                        الاخبار
                    </Link>
                    <Link
                        className="block px-4 py-2 text-white hover:bg-[#7A4622]"
                        onClick={() => scrollToPosition(1800)} // Scroll to 2000px from the top
                    >
                        المنتجات
                    </Link>
                    <Link
                        className="block px-4 py-2 text-white hover:bg-[#7A4622]"
                        onClick={() => scrollToPosition(5500)} // Scroll to 2500px from the top
                    >
                        اتصل بنا
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;
