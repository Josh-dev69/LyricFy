import { Button } from "flowbite-react"
import heroImg from "../assets/images/hero-img.png"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className='custom-bg md:h-dvh bg-center flex flex-col justify-center items-center px-4 overflow-hidden'>
            <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl">
                <div className="flex-1 w-full md:w-1/2 p-4 md:p-8 text-center">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 text-slate-700 drop-shadow-xl">
                        Welcome To LyricFy
                    </h3>
                    <p className="mb-6 text-2xl md:text-xl my-10 leading-6 max-sm:text-sm drop-shadow-lg lg:text-2xl">
                        Unleash the power of lyrics and connect with your favorite songs like never before. Explore, save, and enjoy the lyrics that speak to you.
                    </p>
                    <Link to='/sign-up'>
                        <Button gradientDuoTone="purpleToBlue" className="mx-auto w-1/3 mt-5" outline>
                            Sign Up
                        </Button>
                    </Link>
                </div>
                <div className="flex-1 w-full md:w-1/2 p-4 md:p-8 border-10 max-sm:hidden">
                    <img src={heroImg} alt="hero img" className="w-full h-full max-w-md mx-auto" />
                </div>
            </div>
        </div >
    )
}

export default Hero
