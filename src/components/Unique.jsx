import Bag1 from '../assets/bag_01.png';
import Bag2 from '../assets/bag_02.png';

const Unique = () => {
    return (
        <div className='relative h-screen bg-[#FFFBF0]'>
            <div className="absolute hidden md:block  bottom-0 left-0 h-80 overflow-hidden">
                <img
                    src={Bag1}
                    alt="Bag 1"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative bg-[#432818] rounded-e-[50px] h-[90%] w-full md:w-[80%] ml-auto flex flex-col justify-between p-8 rtl">
                {/* Left Image Section (Bag 1) */}

                {/* Text Section */}
                <div className="flex flex-col mt-12 items-end text-right gap-4 w-[80%] ml-auto mr-32">
                    <h1 className="text-3xl font-semibold text-white mb-4 w-full  md:w-[60%]">
                        مصنوعة يدويًا لتكون فريدة من نوعها
                    </h1>
                    <p className="text-base text-white w-full  md:w-[60%] leading-8">
                        تم تصميم كل قطعة بعناية وإتقان لتكون فريدة من نوعها، مما يجعلها تعكس شخصيتك وأسلوبك الخاص. باستخدام أجود أنواع الجلود وتقنيات الحرف اليدوية التقليدية، نضمن لك منتجًا يجمع بين الفخامة، المتانة، والتصميم الأنيق. اختر التميز مع إكسسوارات مصنوعة لتدوم وتروي قصة من الحرفية والإبداع.
                    </p>
                </div>

                {/* Button Section */}
                <div className="flex justify-center mt-4 mr-6">
                    <button className="bg-[#FFB703] text-black py-2 px-4 md:py-3 md:px-6 rounded-full text-base md:text-lg font-semibold hover:bg-[#e59b00] transition duration-300 ease-in-out">
                        حقيبة عائلية
                    </button>
                </div>
            </div>
            <div className="absolute hidden md:block right-0 bottom-0 h-[40%]">
                <img
                    src={Bag2}
                    alt="Bag 2"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

export default Unique;
