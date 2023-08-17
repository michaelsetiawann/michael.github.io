import HomePage from './_sections/HomePage';
import Landing from './landing';


export default function Home() {

    return (
        <>
            <HomePage />
            <div id='test' className='h-screen mt-44 md:mt-52 xl:mt-72'>
                <Landing />
            </div>
        </>
    )
}
