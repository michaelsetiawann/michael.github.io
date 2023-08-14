'use client'
import TypewriterComponent from "typewriter-effect";

export function TypingEffect({ texts, cursor = "|", delay = 100, autoStart = true, loop = true} : { texts: string[], autoStart?: boolean, loop?: boolean, cursor?: string, delay?: number }) {
    return (
        <>
            <TypewriterComponent
                options={{
                    strings: texts,
                    autoStart: autoStart,
                    loop: loop,
                    cursor: cursor,
                    delay: delay,
                }}
            />
        </>
    );
}