import HeroImage from '../assets/header_image.png';
import Frame from '../assets/Frame.png'; // import the frame image
import ArrowIcon from '../assets/Group 38.png'; // import the arrow icon

const Hero = () => {
    return (
        <section
            className="relative h-[90vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
            <div className="absolute inset-0 flex flex-row items-center justify-start pl-16 text-left text-white p-4 rtl">
                <div className="text-right">
                    <h1 className="text-4xl md:text-4xl font-bold mb-2 rtl text-center md:text-right md:w-2/3">
                        تسوّق أفضل تشكيلة من{" "}
                        <span className="text-[#FFB703]">حقائب الجلد</span>
                    </h1>
                    <p className="text-base md:text-lg max-w-lg text-center md:text-right md:w-2/3">
                        اكتشف مجموعة رائعة من حقائب الجلد الفاخرة التي تجمع بين الأناقة والجودة. مصنوعة من أجود أنواع الجلود، تتميز بتصاميم عصرية وعملية تناسب جميع المناسبات. ارتقِ بأسلوبك مع حقيبة تعكس ذوقك الرفيع.
                    </p>
                </div>
            </div>

            {/* Arrow button */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center">

            </div>

            {/* Frame at the bottom */}
            <div className="absolute -bottom-12 left-0 w-full flex flex-col">
                <button className='absolute text-center -bottom-3 self-center '>
                    <img src={ArrowIcon} alt="Arrow" className="w-16 h-20" />
                </button>
                <img src={Frame} alt="Frame" className="w-full h-24 object-cover" />
            </div>
        </section >
    );
};

export default Hero;
