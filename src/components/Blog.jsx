import blog1 from '../assets/Group 19896.png';
import blog2 from '../assets/Group 19897.png';
import blog3 from '../assets/Group 19898.png';

const Blog = () => {
    return (
        <div className="py-16 px-4 bg-[#FFFBF0]">
            {/* Title Section */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-[#432818] mb-4">
                    المقالات / المدونات
                </h1>
                <p className="text-sm md:text-base text-gray-600 font-medium max-w-[800px] mx-auto">
                    اكتشف أحدث المقالات والمدونات التي تقدم نصائح قيّمة، معلومات عن صناعة الجلود، وأفكار حول كيفية العناية بالمنتجات الجلدية. سواء كنت تبحث عن اتجاهات الموضة أو ترغب في تعلم المزيد عن الجودة والحرفية وراء المنتجات الجلدية، نقدم لك محتوى غني ومفيد يناسب اهتماماتك.
                </p>
            </div>

            {/* Images Section */}
            <div className="flex  justify-center gap-8 flex-wrap-reverse">
                <div className="relative">
                    <img
                        src={blog1}
                        alt="Blog 1"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                <div className="relative">
                    <img
                        src={blog2}
                        alt="Blog 2"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
                <div className="relative">
                    <img
                        src={blog3}
                        alt="Blog 3"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
