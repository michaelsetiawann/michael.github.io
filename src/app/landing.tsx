import { TypingEffect } from "@/components/effect/TypingEffect";

export default function Landing() {
    // flex flex-col justify-center items-center text-center
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center px-5">
                <h1 className="text-4xl font-mono"><TypingEffect texts={['This website is currenly under development!']} cursor="_"/></h1>
            </div>
        </>
    )
}