'use client'
import TypewriterComponent from "typewriter-effect";
import ThemeSwicher from "./ThemeSwicher";

export default function Landing() {
    // flex flex-col justify-center items-center text-center
    return (
        <>
            <nav className="absolute py-5 px-8 flex items-center justify-between w-full ">
                <div className="font-mono font-bold text-3xl">
                    glennprays;
                </div>
                <div className="">
                    <ThemeSwicher />
                </div>
            </nav>
            <div className="min-h-screen flex flex-col justify-center items-center text-center px-5">
                <h1 className="text-4xl font-mono"><TypingEffect /></h1>
            </div>
        </>
    )
}

function TypingEffect() {
    return (
        <>
            <TypewriterComponent
                options={{
                    strings: ['This website is currenly under development!'],
                    autoStart: true,
                    loop: true,
                    cursor: '_',
                    delay: 100,
                }}
            />
        </>
    );
}