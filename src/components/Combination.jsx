import Img1 from '../assets/Group 19874.png';
import Img2 from '../assets/Group 19875.png';
import Img3 from '../assets/Group 19876.png';

const Combination = () => {
    return (
        <div className="relative bg-[#FFFBF0] py-16 px-4">
            {/* Title */}
            <h1 className="text-center text-4xl font-semibold text-[#432818] mb-4">
                فئاتنا المتنوعة
            </h1>

            {/* Description */}
            <p className="text-center text-black text-base font-medium max-w-[800px] mx-auto mb-12">
                استمتع بتشكيلة واسعة من الفئات الجلدية المصنوعة يدويًا، حيث نعرض لك الحقائب، الإكسسوارات،
                والمنتجات المخصصة التي تجمع بين الجودة والفخامة. سواء كنت تبحث عن حقيبة أنيقة أو قطعة فريدة
                من نوعها، لدينا ما يناسبك.
            </p>

            {/* Images Section */}
            <div className="flex justify-center gap-4 w-full flex-wrap relative ">
                {/* First Image */}
                <div className="relative">
                    <img
                        src={Img1}
                        alt="Image 1"
                        className="w-full h-auto object-cover rounded-lg z-10 relative"
                    />
                    {/* Left circle, partially under the image */}
                    <div className="absolute top-44 -left-12 w-24 h-24 bg-[#FFB703] rounded-full z-0"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
                </div>
                {/* Second Image */}
                <div className="relative">
                    <img
                        src={Img2}
                        alt="Image 2"
                        className="w-full h-auto object-cover rounded-lg z-10 relative"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
                </div>
                {/* Third Image */}
                <div className="relative">
                    <img
                        src={Img3}
                        alt="Image 3"
                        className="w-full h-auto object-cover rounded-lg z-10 relative"
                    />
                    {/* Right circle, partially under the image */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#FFB703] rounded-full z-0"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default Combination;
