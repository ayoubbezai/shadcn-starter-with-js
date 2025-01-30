import custmore from '../assets/testimonial_image.png'
import arrow from '../assets/Group 19883.png';
import person from '../assets/Group 19886.png';


const Custmores = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-[#FFFBF0] p-4 pt-16 pl-0">
            {/* Left Image Section */}
            <div className="w-full lg:w-[45%] h-[300px] lg:h-full overflow-hidden mb-8 lg:mb-0">
                <img
                    src={custmore}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Text Section */}
            <div className="w-full lg:w-1/2 p-6  rounded-r-lg flex flex-col justify-center items-start lg:items-end text-right ">
                <div className="flex justify-between items-center w-full lg:w-[90%]">
                    <h1 className='text-7xl md:text-[100px]  text-[#432818]'>“</h1>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={arrow} alt="" className='w-24 h-24 mt-12' />
                        <img src={arrow} alt="" className='w-24 h-24 rotate-180 mb-1 ' />
                    </div>
                </div>

                <p className="text-base lg:text-[17px] text-black w-full lg:w-[90%] leading-8">
                    لقد كنت أبحث لفترة طويلة عن حقيبة جلدية عالية الجودة تجمع بين الأناقة والعملية، وبالفعل وجدت ذلك في Leather Brothers. اشتريت حقيبة ظهر جلدية، والجودة لا تضاهى! الجلد المستخدم ناعم ومتين في نفس الوقت، والتصميم عصري جداً ومناسب لجميع مناسباتي. أنا أحب التفاصيل الدقيقة في الحقيبة مثل الخياطة المتقنة والإغلاق السلس. الألوان رائعة أيضاً، والأهم من ذلك، أنني شعرت أن الحقيبة ستكون جزءًا من مجموعتي لسنوات. كما كانت خدمة العملاء استثنائية، حيث تم إجابتي على جميع استفساراتي بسرعة وباحترافية. سأوصي بلا شك بهذه العلامة التجارية لأصدقائي وعائلتي!                </p>

                <img src={person} alt="" className='mt-6 self-end' />
            </div>
        </div>
    )
}
export default Custmores;
