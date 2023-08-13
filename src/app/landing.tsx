import ThemeSwicher from "./ThemeSwicher";

export default function Landing() {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-5">
            <h1 className="text-3xl">This website is currenly under development!</h1>

            <ThemeSwicher />
        </div>
    )
}