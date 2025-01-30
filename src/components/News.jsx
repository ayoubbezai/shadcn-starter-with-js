import footerImg from '../assets/footer_image.png';
import emailInput from '../assets/Group 114.png';

const News = () => {
    return (
        <div className="bg-[#1A0E07] p-4 pl-0 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                {/* Left Side: Image */}
                <div className="w-full md:w-[30rem] mb-8 md:mb-0">
                    <img
                        src={footerImg}
                        alt="Footer Image"
                        className="md:w-full h-72 md:h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Right Side: Title and Description */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end gap-6 md:mr-24">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-right">
                        اشترك في
                        <span className="text-[#FFB703] ml-2">&nbsp;نشرتنا الإخبارية</span> {/* Added margin to span */}
                    </h1>
                    <p className="text-sm md:text-base text-gray-300 font-medium text-center md:text-right leading-8 w-full md:w-[90%] ml-auto">
                        انضم إلى مجتمعنا واحصل على تحديثات حصرية مباشرة إلى صندوق الوارد الخاص بك! اشترك الآن في نشرتنا الإخبارية لتكون أول من يعرف عن أحدث المنتجات، العروض الخاصة، وأحدث النصائح حول العناية بالمنتجات الجلدية. لا تفوت فرصة الاستفادة من كل جديد نقدم لك!
                    </p>
                    <img src={emailInput} alt="Email Input" className="h-16 w-[80%] mx-auto md:ml-auto md:mr-0" />
                </div>
            </div>
        </div>
    );
};

export default News;
