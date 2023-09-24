import React, { SetStateAction } from "react";

export default function Hamburger({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<SetStateAction<boolean>> }) {
   
    return (
        <div
            className="w-7 flex flex-col items-center justify-center gap-1 bg-transparent xl:hidden "
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className={"bg-black dark:bg-white w-full p-[1.5px] rounded-full transition-transform " + (isOpen ? "rotate-45 translate-y-[7px]" : "")} />
            <div className={"bg-black dark:bg-white w-full p-[1.5px] rounded-full transition-opacity " + (isOpen ? "opacity-0" : "")} />
            <div className={"bg-black dark:bg-white w-full p-[1.5px] rounded-full transition-transform " + (isOpen ? "-rotate-45 -translate-y-[7px]" : "")} />
        </div>
    )
}