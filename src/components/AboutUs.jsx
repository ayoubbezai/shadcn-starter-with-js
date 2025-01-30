import AboutUS from '../assets/about_us image.png';

const AboutUs = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-[#FFFBF0] p-4 pt-16 pl-0">
            {/* Left Image Section */}
            <div className="w-full lg:w-[45%] h-[300px] lg:h-full overflow-hidden mb-8 lg:mb-0">
                <img
                    src={AboutUS}
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Text Section */}
            <div className="w-full lg:w-1/2 p-6 gap-8 rounded-r-lg flex flex-col justify-center items-start lg:items-end text-right">
                <h1 className="text-2xl lg:text-4xl font-semibold text-[#432818] mb-4 w-full lg:w-[90%]">
                    تصمم Leather Brothers وتملك وتدير جميع مراحل إنشاء تشكيلتنا الواسعة من المنتجات الجلدية المصنوعة يدويًا، والتي تشمل
                </h1>
                <p className="text-base lg:text-[17px] text-black w-full lg:w-[90%] leading-8">
                    تقدم Leather Brothers مجموعة مميزة من المنتجات الجلدية المصنوعة يدويًا بجودة عالية وتصاميم فريدة. نحن نتحكم في كل خطوة من عملية التصنيع، بدءًا من التصميم وصولًا إلى الإنتاج، لضمان تقديم قطع متقنة تجمع بين الأناقة والمتانة. اكتشف تشكيلتنا الواسعة من الإكسسوارات والحقائب الجلدية التي تناسب جميع الأذواق والمناسبات!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
