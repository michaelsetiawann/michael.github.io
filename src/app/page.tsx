import HomePage from "./_sections/HomePage";
import Skills from "./_sections/Skills";
import Landing from "./landing";

export default function Home() {
    return (
        <>
            <HomePage />
            <Skills />
            <div id="test" className="h-screen mt-44 md:mt-52 xl:mt-72">
                <Landing />
            </div>
        </>
    );
}
