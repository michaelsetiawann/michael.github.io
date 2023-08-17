import { useEffect, useState } from "react";

export default function Hamburger({ getOpenStatus }: { getOpenStatus: (value : boolean) => void }) {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        getOpenStatus(isOpen);
    }, [isOpen, getOpenStatus])
    return (
        <div
            className="h-6 w-10 flex flex-col items-center justify-between bg-transparent xl:hidden "
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className={"bg-white w-full p-[2px] rounded-full transition-transform " + (isOpen ? "rotate-45 translate-y-[10px]" : "")} />
            <div className={"bg-white w-full p-[2px] rounded-full transition-opacity " + (isOpen ? "opacity-0" : "")} />
            <div className={"bg-white w-full p-[2px] rounded-full transition-transform " + (isOpen ? "-rotate-45 -translate-y-[10px]" : "")} />
        </div>
    )
}