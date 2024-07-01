import Image from "next/image"
import bgtopPage from '@/public/Image/bg-topPage.png'
import bgtopPagePC from '@/public/Image/bg-topPage-pc.png'
import play from '@/public/Image/play.png'
import { signInWithAnonymous } from "../logic/SignInWithAnonymous"

const signInPage = () => {
    return (
        <div className="relative h-screen w-screen bg-cover">
            <div
                className="absolute top-0 left-0 h-full w-full bg-cover md:hidden"
                style={{
                    backgroundImage: `url(${bgtopPage.src})`,
                }}
            />
            <div
                className="absolute top-0 left-0 h-full w-full bg-cover hidden md:block"
                style={{
                    backgroundImage: `url(${bgtopPagePC.src})`,
                }}
            />
            <div className="relative text-center max-w-screen-sm mx-auto h-full flex flex-col justify-center items-center">
                {/* <h1 className="font-mono text-6xl mb-8">征夷大将軍</h1> */}
                <p className="font-mono text-7xl mb-8">English</p>
                <p className="font-mono text-7xl mb-8 self-start pl-20">
                    <span className="text-yellow-300 text-8xl">Be</span>
                </p>
                <p className="font-mono text-7xl mb-8">
                    <span className="text-8xl">Real</span>
                </p>
                {/* <p className="font-mono text-7xl mb-8 self-end pr-5">せよ</p> */}
                <button
                    onClick={signInWithAnonymous}
                    className="text-2xl p-8 border-2 rounded-full bg-yellow-300 flex items-center justify-center"
                >
                    <Image src={play} alt="" className="h-[5vh] w-full" />
                </button>
            </div>
        </div>
    )
}

export default signInPage