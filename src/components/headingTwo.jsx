import React from "react";

const HeadingTwo = ({ title, desc }) => {
    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-center text-[#02295a] my-1">{title}</h1>
            <p className="text-[#9699ab] text-center text-[14px]">{desc}</p>
        </div>
    );
};

export default HeadingTwo;
