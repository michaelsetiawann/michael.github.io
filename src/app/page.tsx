import Contact from "./_sections/Contact";
import HomePage from "./_sections/HomePage";
import Portfolio from "./_sections/Portfolio";
import Skills from "./_sections/Skills";
import Landing from "./landing";

export default function Home() {
    return (
        <>
            <HomePage />
            <Skills />
            <Portfolio />
            <Contact />
            {/* <div id="test" className="h-screen mt-44 md:mt-52 xl:mt-72">
                <Landing />
            </div> */}
        </>
    );
}
