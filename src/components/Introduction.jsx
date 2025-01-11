import React from "react";
import Typewriter from "typewriter-effect";
export const Introduction = () => {
    return (
        <>
            <div className="text-white p-2 w-[70%] h-[350px] absolute top-[15%] left-[10%]  block">
                <div className="flex items-center h-[100px] text-[50px] relative">
                    <span className="pt-[20px] leading-none font-customFont">
                        Namaste! We are
                    </span>
                    <div className="text-customGreen font-customFont absolute ml-[440px] w-[580px] pt-[22px] leading-none text-nowrap">
                        <Typewriter
                            options={{
                                loop: true,
                                autoStart: true,
                                delay: 75,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(" Software Developers...")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(" Full Stack Developers...")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(" Tech Enthusiasts...")
                                    .pauseFor(2000)
                                    .start();
                            }}
                        />
                    </div>
                </div>
                <div>
                    <span className="text-white font-customFont text-[20px]">
                        We are a dynamic team of three passionate developers specializing in
                        building innovative software solutions, cutting-edge websites, and
                        intelligent AI tools. Our combined expertise empowers us to craft
                        customized solutions for businesses, firms, and individuals, driving
                        efficiency and growth. With a strong foundation in technology and
                        creativity, we've proudly secured 4 hackathon wins demonstrating our
                        ability to solve real-world problems with innovative solutions. From
                        intuitive business tools to scalable web applications and advanced
                        AI systems, we are dedicated to turning ideas into powerful digital
                        products. Let’s build the future, together.
                    </span>
                </div>
            </div>
        </>
    );
};
