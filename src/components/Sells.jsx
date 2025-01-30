import React from 'react';
import Background from '../assets/Rectangle 2048.png';
import img1 from '../assets/Group 19860.png';
import img2 from '../assets/Group 19861.png';
import img3 from '../assets/Group 19862.png';
import img4 from '../assets/Group 19881.png';
import arrow from '../assets/Group 19883.png';
import Frame from '../assets/Frame.png'; // import the frame image

const Sells = () => {
    return (
        <div
            className="relative bg-cover bg-center py-16 pt-52 px-4 overflow-hidden"
            style={{ backgroundImage: `url(${Background})` }}
        >
            {/* Title Section */}
            <div className="text-center text-white mb-12">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                    أكثر المنتجات مبيعًا
                </h1>
                <p className="text-sm md:text-base mt-4 leading-8 font-medium w-full md:w-2/3 mx-auto">
                    استكشف أفضل اختياراتنا التي نالت إعجاب عملائنا، حيث تجمع بين الجودة العالية والتصاميم الفريدة.
                    هذه المنتجات تعتبر الأكثر طلبًا بفضل متانتها وأناقتها، وهي الخيار المثالي لكل من يبحث عن الأفضل.
                </p>
            </div>

            {/* Images Section */}
            <div className="flex  flex-wrap justify-center gap-8 relative">
                {/* Left Image */}
                <div className="flex justify-center   relative">
                    <img
                        src={img1}
                        alt="Product 1"
                        className="w-52 object-contain rounded-lg"
                    />
                    <img
                        src={arrow}
                        alt="Arrow"
                        className="absolute -left-8 top-28   bottom-0 w-16 h-16"
                    />
                </div>

                {/* Right Image */}
                <div className="flex justify-center relative">
                    <img
                        src={img2}
                        alt="Product 2"
                        className="w-52 object-contain rounded-lg"
                    />

                </div>

                {/* Left Image */}
                <div className="flex justify-center  relative">
                    <img
                        src={img3}
                        alt="Product 3"
                        className="w-52 object-contain rounded-lg"
                    />
                </div>

                {/* Right Image */}
                <div className="relative">
                    <img
                        src={img4}
                        alt="Product 4"
                        className="w-52 object-contain rounded-lg"
                    />
                    <img
                        src={arrow}
                        alt="Arrow"
                        className="absolute -right-8 top-24   rotate-180  bottom-0 w-16 h-16"
                    />
                </div>
            </div>
            <div className="absolute -bottom-12 left-0 w-full flex flex-col">

                <img src={Frame} alt="Frame" className="w-full h-24 object-cover" />
            </div>
        </div>
    );
};

export default Sells;
