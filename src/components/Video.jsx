import React from 'react';
import VideoImg from '../assets/Group 19878.png';

const Video = () => {
    return (
        <div className="relative bg-[#FFFBF0]  pt-10 px-4">
            {/* Title */}
            <h1 className="text-center text-4xl font-semibold text-[#432818] mb-8">
                فيديو
            </h1>

            {/* Image Section */}
            <div className="flex justify-center">
                <img
                    src={VideoImg}
                    alt="Video"
                    className="w-full max-w-[800px] h-auto object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default Video;
